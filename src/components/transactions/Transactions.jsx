import { useState } from 'react';
import { useTransactions } from '../../hooks/useTransactions';
import { useRoleAccess } from '../../hooks/useRoleAccess';
import TransactionFilters from './TransactionFilters';
import TransactionTable from './TransactionTable';
import AddTransactionModal from './AddTransactionModal';
import styles from './Transactions.module.css';

function TransactionsPage() {
  const { transactions: filteredTransactions, allTransactions } = useTransactions();
  const { isAdmin } = useRoleAccess();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingTransaction, setEditingTransaction] = useState(null);

  const handleAddClick = () => {
    setEditingTransaction(null);
    setIsModalOpen(true);
  };

  const handleEditClick = (transaction) => {
    setEditingTransaction(transaction);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setEditingTransaction(null);
  };

  return (
    <div className={styles.transactions}>
      <div className={styles.header}>
        <h1>Transactions</h1>
        {isAdmin && (
          <button onClick={handleAddClick} className={styles.addButton}>
            ➕ Add Transaction
          </button>
        )}
      </div>

      <div className={styles.statsBar}>
        <p>
          Showing <strong>{filteredTransactions.length}</strong> of <strong>{allTransactions.length}</strong> transactions
        </p>
      </div>

      <TransactionFilters />
      <TransactionTable
        transactions={filteredTransactions}
        onEdit={handleEditClick}
      />

      <AddTransactionModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        editingTransaction={editingTransaction}
      />
    </div>
  );
}

export default TransactionsPage;
