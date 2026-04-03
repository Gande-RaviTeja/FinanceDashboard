import styles from './SummaryCards.module.css';

function SummaryCards({ balance, income, expenses }) {
  return (
    <div className={styles.cardsContainer}>
      <div className={styles.card}>
        <div className={styles.cardHeader}>
          <h3 className={styles.cardTitle}>Total Balance</h3>
          
        </div>
        <div className={styles.cardValue}>
          ${balance.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
        </div>
        <p className={styles.cardMeta}>Current account balance</p>
      </div>

      <div className={styles.card}>
        <div className={styles.cardHeader}>
          <h3 className={styles.cardTitle}>Total Income</h3>
         
        </div>
        <div className={`${styles.cardValue} ${styles.income}`}>
          +${income.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
        </div>
        <p className={styles.cardMeta}>All time income</p>
      </div>

      <div className={styles.card}>
        <div className={styles.cardHeader}>
          <h3 className={styles.cardTitle}>Total Expenses</h3>
         
        </div>
        <div className={`${styles.cardValue} ${styles.expense}`}>
          -${expenses.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
        </div>
        <p className={styles.cardMeta}>All time expenses</p>
      </div>
    </div>
  );
}

export default SummaryCards;
