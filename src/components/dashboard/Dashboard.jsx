import { useMemo } from 'react';
import { useDataContext } from '../../context/DataContext';
import SummaryCards from './SummaryCards';
import BalanceTrend from './BalanceTrend';
import SpendingBreakdown from './SpendingBreakdown';
import styles from './Dashboard.module.css';

function Dashboard() {
  const { state } = useDataContext();
  const { transactions } = state;

  // Memoize calculations to avoid re-computation
  const { summaryData, trendData, breakdownData } = useMemo(() => {
    // Calculate summary totals
    const totalIncome = transactions
      .filter(t => t.type === 'Income')
      .reduce((sum, t) => sum + t.amount, 0);

    const totalExpenses = Math.abs(
      transactions
        .filter(t => t.type === 'Expense')
        .reduce((sum, t) => sum + t.amount, 0)
    );

    const balance = totalIncome - totalExpenses;

    // Generate balance trend data (12 months with realistic fluctuations)
    const now = new Date();
    const trendMonths = [];
    let startingBalance = 5000; // Starting balance

    for (let i = 11; i >= 0; i--) {
      const date = new Date(now.getFullYear(), now.getMonth() - i, 1);
      const monthYear = date.toLocaleDateString('en-US', { month: 'short', year: '2-digit' });

      // Calculate income and expenses for this month
      const monthTransactions = transactions.filter(t => {
        const tDate = new Date(t.date);
        return (
          tDate.getMonth() === date.getMonth() &&
          tDate.getFullYear() === date.getFullYear()
        );
      });

      const monthIncome = monthTransactions
        .filter(t => t.type === 'Income')
        .reduce((sum, t) => sum + t.amount, 0);

      const monthExpenses = Math.abs(
        monthTransactions
          .filter(t => t.type === 'Expense')
          .reduce((sum, t) => sum + t.amount, 0)
      );

      // Calculate balance with monthly net flow
      const monthNet = monthIncome - monthExpenses;
      const currentBalance = Math.max(0, startingBalance + monthNet);

      trendMonths.push({
        month: monthYear,
        balance: Math.round(currentBalance),
      });

      startingBalance = currentBalance;
    }

    // Generate spending breakdown data
    const spendingByCategory = {};
    transactions
      .filter(t => t.type === 'Expense')
      .forEach(t => {
        spendingByCategory[t.category] =
          (spendingByCategory[t.category] || 0) + Math.abs(t.amount);
      });

    const breakdown = Object.entries(spendingByCategory)
      .sort(([, a], [, b]) => b - a)
      .map(([name, value]) => ({ name, value }));

    return {
      summaryData: { balance, totalIncome, totalExpenses },
      trendData: trendMonths,
      breakdownData: breakdown,
    };
  }, [transactions]);

  return (
    <div className={styles.dashboard}>
      <h1 className={styles.title}>Dashboard</h1>
      <SummaryCards
        balance={summaryData.balance}
        income={summaryData.totalIncome}
        expenses={summaryData.totalExpenses}
      />
      <div className={styles.chartsGrid}>
        <BalanceTrend data={trendData} />
        <SpendingBreakdown data={breakdownData} />
      </div>
    </div>
  );
}

export default Dashboard;
