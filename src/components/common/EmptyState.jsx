import styles from './EmptyState.module.css';

function EmptyState({ icon = '📋', title = 'No data', description = 'No data available' }) {
  return (
    <div className={styles.emptyState}>
      <span className={styles.icon}>{icon}</span>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.description}>{description}</p>
    </div>
  );
}

export default EmptyState;
