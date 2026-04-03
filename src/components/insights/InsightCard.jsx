import styles from './InsightCard.module.css';

function InsightCard({ icon, title, value, subtitle, trend, trendValue }) {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <span className={styles.icon}>{icon}</span>
        <h3 className={styles.title}>{title}</h3>
      </div>

      <div className={styles.value}>
        {value}
      </div>

      {subtitle && <p className={styles.subtitle}>{subtitle}</p>}

      {trend && (
        <div className={`${styles.trend} ${styles[`trend${trend}`]}`}>
          <span className={styles.trendIcon}>
            {trend === 'Up' && ''}
            {trend === 'Down' && ''}
            {trend === 'Stable' && ''}
          </span>
          <span className={styles.trendText}>
            {trendValue}
          </span>
        </div>
      )}
    </div>
  );
}

export default InsightCard;
