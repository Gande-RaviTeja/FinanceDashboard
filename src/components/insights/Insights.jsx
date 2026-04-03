import { useInsights } from '../../hooks/useInsights';
import InsightCard from './InsightCard';
import styles from './Insights.module.css';

function InsightsPage() {
  const insights = useInsights();
  const {
    highestCategory,
    monthlyComparison,
    avgTransaction,
    spendingTrend,
    totalIncome,
    totalExpenses,
  } = insights;

  const savingsRate = totalIncome > 0 ? ((totalIncome - totalExpenses) / totalIncome * 100).toFixed(1) : 0;

  return (
    <div className={styles.insights}>
      <h1>Insights</h1>

      <div className={styles.insightsGrid}>
        <InsightCard

          title="Top Spending Category"
          value={highestCategory ? highestCategory.name : 'N/A'}
          subtitle={highestCategory ? `$${highestCategory.amount.toLocaleString()}` : 'No expenses yet'}
        />

        <InsightCard
      
          title="Monthly Savings Rate"
          value={`${savingsRate}%`}
          subtitle={`You save ${savingsRate}% of your income`}
          trend={savingsRate > 20 ? 'Up' : savingsRate > 0 ? 'Stable' : 'Down'}
          trendValue={savingsRate > 20 ? 'Great savings!' : savingsRate > 0 ? 'Good savings' : 'Needs work'}
        />

        <InsightCard
       
          title="Month-over-Month Change"
          value={monthlyComparison.change > 0 ? `+${monthlyComparison.change.toFixed(1)}%` : `${monthlyComparison.change.toFixed(1)}%`}
          subtitle={`This month: $${monthlyComparison.thisMonth.toLocaleString()} vs Last month: $${monthlyComparison.lastMonth.toLocaleString()}`}
          trend={monthlyComparison.change > 10 ? 'Up' : monthlyComparison.change < -10 ? 'Down' : 'Stable'}
          trendValue={monthlyComparison.change > 10 ? 'Spending increased' : monthlyComparison.change < -10 ? 'Spending decreased' : 'Spending stable'}
        />

        <InsightCard
          
          title="Average Transaction"
          value={`$${avgTransaction.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`}
          subtitle="Average per transaction"
        />

        <InsightCard
         
          title="Total Income"
          value={`$${totalIncome.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`}
          subtitle="All time income"
          trend="Up"
          trendValue="Positive cash flow"
        />

        <InsightCard
         
          title="Total Expenses"
          value={`$${totalExpenses.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`}
          subtitle="All time expenses"
          trend="Down"
          trendValue="Keep it low"
        />
      </div>

      <div className={styles.tipsSection}>
        <h2> Financial Tips</h2>
        <ul className={styles.tipsList}>
          {highestCategory && (
            <li>
              Your highest spending is on <strong>{highestCategory.name}</strong>. Consider setting a budget for this category.
            </li>
          )}
          {spendingTrend === 'increasing' && (
            <li>
              Your spending is <strong>increasing month-over-month</strong>. Monitor your expenses to stay on track.
            </li>
          )}
          {savingsRate > 20 && (
            <li>
              Great job! You're saving <strong>{savingsRate}%</strong> of your income. Keep it up!
            </li>
          )}
          {savingsRate <= 20 && savingsRate > 0 && (
            <li>
              You're saving <strong>{savingsRate}%</strong> of your income. Try to increase this by reducing discretionary spending.
            </li>
          )}
          <li>
            Review your transactions regularly to stay aware of your financial habits.
          </li>
        </ul>
      </div>
    </div>
  );
}

export default InsightsPage;
