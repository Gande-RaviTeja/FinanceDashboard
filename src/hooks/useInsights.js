import { useMemo } from 'react';
import { useDataContext } from '../context/DataContext';

export const useInsights = () => {
  const { state } = useDataContext();
  const { transactions } = state;

  const insights = useMemo(() => {
    if (transactions.length === 0) {
      return {
        highestCategory: null,
        monthlyComparison: null,
        avgTransaction: 0,
        spendingTrend: 'stable',
        totalIncome: 0,
        totalExpenses: 0,
      };
    }

    // Calculate totals
    const totalIncome = transactions
      .filter(t => t.type === 'Income')
      .reduce((sum, t) => sum + t.amount, 0);

    const totalExpenses = Math.abs(
      transactions
        .filter(t => t.type === 'Expense')
        .reduce((sum, t) => sum + t.amount, 0)
    );

    // Get spending by category
    const spendingByCategory = {};
    transactions
      .filter(t => t.type === 'Expense')
      .forEach(t => {
        spendingByCategory[t.category] =
          (spendingByCategory[t.category] || 0) + Math.abs(t.amount);
      });

    const highestCategory = Object.entries(spendingByCategory).sort(
      ([, a], [, b]) => b - a
    )[0];

    // Calculate monthly comparison
    const now = new Date();
    const currentMonth = now.getMonth();
    const currentYear = now.getFullYear();

    const thisMonthExpenses = transactions
      .filter(t => {
        const date = new Date(t.date);
        return (
          t.type === 'Expense' &&
          date.getMonth() === currentMonth &&
          date.getFullYear() === currentYear
        );
      })
      .reduce((sum, t) => sum + Math.abs(t.amount), 0);

    const lastMonthDate = new Date(now.getFullYear(), now.getMonth() - 1, 1);
    const lastMonthExpenses = transactions
      .filter(t => {
        const date = new Date(t.date);
        return (
          t.type === 'Expense' &&
          date.getMonth() === lastMonthDate.getMonth() &&
          date.getFullYear() === lastMonthDate.getFullYear()
        );
      })
      .reduce((sum, t) => sum + Math.abs(t.amount), 0);

    const monthlyChange =
      lastMonthExpenses > 0
        ? ((thisMonthExpenses - lastMonthExpenses) / lastMonthExpenses) * 100
        : 0;

    let spendingTrend = 'stable';
    if (monthlyChange > 10) spendingTrend = 'increasing';
    else if (monthlyChange < -10) spendingTrend = 'decreasing';

    // Average transaction amount
    const avgTransaction = transactions.length > 0
      ? Math.abs(transactions.reduce((sum, t) => sum + t.amount, 0) / transactions.length)
      : 0;

    return {
      highestCategory: highestCategory ? { name: highestCategory[0], amount: highestCategory[1] } : null,
      monthlyComparison: {
        thisMonth: thisMonthExpenses,
        lastMonth: lastMonthExpenses,
        change: monthlyChange,
      },
      avgTransaction,
      spendingTrend,
      totalIncome,
      totalExpenses,
    };
  }, [transactions]);

  return insights;
};
