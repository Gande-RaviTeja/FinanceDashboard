import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import styles from './BalanceTrend.module.css';

function BalanceTrend({ data }) {
  if (!data || data.length === 0) {
    return (
      <div className={styles.chartContainer}>
        <h2>Balance Trend</h2>
        <div className={styles.emptyState}>
          <p>No data available</p>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.chartContainer}>
      <h2>Balance Trend (Last 12 Months)</h2>
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
          <defs>
            <linearGradient id="colorWave1" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="var(--primary-color)" stopOpacity={0.8}/>
              <stop offset="95%" stopColor="var(--primary-color)" stopOpacity={0.2}/>
            </linearGradient>
            <linearGradient id="colorWave2" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="var(--primary-light)" stopOpacity={0.6}/>
              <stop offset="95%" stopColor="var(--primary-light)" stopOpacity={0.05}/>
            </linearGradient>
            <linearGradient id="colorWave3" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="var(--primary-dark)" stopOpacity={0.4}/>
              <stop offset="95%" stopColor="var(--primary-dark)" stopOpacity={0}/>
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="var(--border-color)" />
          <XAxis 
            dataKey="month" 
            stroke="var(--text-secondary)"
            style={{ fontSize: '12px' }}
          />
          <YAxis 
            stroke="var(--text-secondary)"
            style={{ fontSize: '12px' }}
            tickFormatter={(value) => `$${(value / 1000).toFixed(0)}k`}
          />
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
          {/* Multiple wave layers for depth effect */}
          <Area
            type="natural"
            dataKey="balance"
            stroke="var(--primary-dark)"
            strokeWidth={2}
            fill="url(#colorWave3)"
            dot={false}
            isAnimationActive={false}
          />
          <Area
            type="natural"
            dataKey="balance"
            stroke="var(--primary-light)"
            strokeWidth={2}
            fill="url(#colorWave2)"
            dot={false}
            isAnimationActive={false}
          />
          <Area
            type="natural"
            dataKey="balance"
            stroke="var(--primary-color)"
            strokeWidth={3}
            fill="url(#colorWave1)"
            dot={{ fill: 'var(--primary-color)', r: 5 }}
            activeDot={{ r: 7 }}
            name="Balance"
            isAnimationActive={false}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

export default BalanceTrend;
