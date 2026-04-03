import { useState } from 'react';
import { useRoleAccess } from '../../hooks/useRoleAccess';
import { useDataContext } from '../../context/DataContext';
import styles from './TransactionTable.module.css';

function TransactionTable({ transactions, onEdit }) {
  const { isAdmin } = useRoleAccess();
  const { dispatch } = useDataContext();
  const [expandedId, setExpandedId] = useState(null);

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this transaction?')) {
      dispatch({ type: 'DELETE_TRANSACTION', payload: id });
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });
  };

  if (transactions.length === 0) {
    return (
      <div className={styles.emptyContainer}>
        <div className={styles.emptyState}>
          <span className={styles.emptyIcon}>📋</span>
          <h2>No transactions found</h2>
          <p>Try adjusting your filters or add a new transaction</p>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.tableContainer}>
      <div className={styles.tableWrapper}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Date</th>
              <th>Amount</th>
              <th>Category</th>
              <th>Type</th>
              <th>Description</th>
              {isAdmin && <th>Actions</th>}
            </tr>
          </thead>
          <tbody>
            {transactions.map(transaction => (
              <tr key={transaction.id} className={styles.row}>
                <td className={styles.dateCell}>
                  {formatDate(transaction.date)}
                </td>
                <td className={`${styles.amountCell} ${transaction.type === 'Income' ? styles.income : styles.expense}`}>
                  {transaction.type === 'Income' ? '+' : '-'}${Math.abs(transaction.amount).toLocaleString('en-US', { minimumFractionDigits: 2 })}
                </td>
                <td className={styles.categoryCell}>
                  <span className={styles.categoryBadge}>{transaction.category}</span>
                </td>
                <td className={styles.typeCell}>
                  <span className={`${styles.typeBadge} ${transaction.type === 'Income' ? styles.incomeBadge : styles.expenseBadge}`}>
                    {transaction.type}
                  </span>
                </td>
                <td className={styles.descriptionCell}>
                  {transaction.description}
                </td>
                {isAdmin && (
                  <td className={styles.actionsCell}>
                    <button
                      className={`${styles.actionBtn} ${styles.editBtn}`}
                      style={{ backgroundColor: 'var(--primary-color)',
                        color: '#fff', border: 'none', borderRadius: '6px', padding: '6px 12px', cursor: 'pointer' }}
                      onClick={() => onEdit(transaction)}
                      title="Edit"
                    >
                      Edit
                    </button>
                    <button
                      className={`${styles.actionBtn} ${styles.deleteBtn}`}
                      style={{ backgroundColor: 'var(--danger-color)',
                        color: '#fff', border: 'none', borderRadius: '6px', padding: '6px 12px', cursor: 'pointer' }}
                      onClick={() => handleDelete(transaction.id)}
                      title="Delete"
                    >
                      Delete
                    </button>
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TransactionTable;
