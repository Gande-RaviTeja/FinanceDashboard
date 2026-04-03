import { PieChart, Pie, Cell, Legend, Tooltip, ResponsiveContainer } from 'recharts';
import styles from './SpendingBreakdown.module.css';

const COLORS = [
  '#2563eb', // primary-color
  '#10b981', // success-color
  '#f59e0b', // warning-color
  '#ef4444', // danger-color
  '#8b5cf6', // purple
  '#ec4899', // pink
  '#06b6d4', // cyan
  '#14b8a6', // teal
];

function SpendingBreakdown({ data }) {
  if (!data || data.length === 0) {
    return (
      <div className={styles.chartContainer}>
        <h2>Spending Breakdown by Category</h2>
        <div className={styles.emptyState}>
          <p>No expense data available</p>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.chartContainer}>
      <h2>Spending Breakdown by Category</h2>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={({ name, value }) => `${name}: $${value}`}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip
            formatter={(value) => `$${value.toLocaleString()}`}
            contentStyle={{
              backgroundColor: 'var(--bg-primary)',
              border: `1px solid var(--border-color)`,
              borderRadius: '4px',
              color: 'var(--text-primary)',
            }}
          />
          <Legend />
        </PieChart>
      </ResponsiveContainer>

      <div className={styles.containerSummary}>
        {data.map((item, index) => (
          <div key={item.name} className={styles.categoryItem}>
            <div className={styles.colorDot} style={{ backgroundColor: COLORS[index % COLORS.length] }}></div>
            <span className={styles.categoryName}>{item.name}</span>
            <span className={styles.categoryValue}>${item.value.toLocaleString()}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SpendingBreakdown;
