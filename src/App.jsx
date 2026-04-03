import { useState } from 'react';
import { DataProvider } from './context/DataContext';
import Header from './components/common/Header';
import Dashboard from './components/dashboard/Dashboard';
import TransactionsPage from './components/transactions/Transactions';
import InsightsPage from './components/insights/Insights';
import styles from './App.module.css';

function App() {
  const [currentPage, setCurrentPage] = useState('dashboard');

  return (
    <DataProvider>
      <div className={styles.appContainer}>
        <Header currentPage={currentPage} onPageChange={setCurrentPage} />
        <main className={styles.mainContent}>
          <div className={styles.container}>
            {currentPage === 'dashboard' && <Dashboard />}
            {currentPage === 'transactions' && <TransactionsPage />}
            {currentPage === 'insights' && <InsightsPage />}
          </div>
        </main>
      </div>
    </DataProvider>
  );
}

export default App;
