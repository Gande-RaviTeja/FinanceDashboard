import { useMemo } from 'react';
import { useDataContext } from '../context/DataContext';

export const useTransactions = () => {
  const { state } = useDataContext();
  const { transactions, filters } = state;

  const filteredTransactions = useMemo(() => {
    let result = [...transactions];

    // Filter by search
    if (filters.search) {
      const searchLower = filters.search.toLowerCase();
      result = result.filter(
        t =>
          t.description.toLowerCase().includes(searchLower) ||
          t.category.toLowerCase().includes(searchLower)
      );
    }

    // Filter by category
    if (filters.category) {
      result = result.filter(t => t.category === filters.category);
    }

    // Filter by type
    if (filters.type !== 'All') {
      result = result.filter(t => t.type === filters.type);
    }

    // Filter by date range
    if (filters.dateRange !== 'All time') {
      const now = new Date();
      let cutoffDate;

      if (filters.dateRange === 'Last 30 days') {
        cutoffDate = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000);
      } else if (filters.dateRange === 'Last 3 months') {
        cutoffDate = new Date(now.getTime() - 90 * 24 * 60 * 60 * 1000);
      }

      if (cutoffDate) {
        result = result.filter(t => new Date(t.date) >= cutoffDate);
      }
    }

    // Sort by date (newest first)
    result.sort((a, b) => new Date(b.date) - new Date(a.date));

    return result;
  }, [transactions, filters]);

  return {
    transactions: filteredTransactions,
    allTransactions: transactions,
    count: filteredTransactions.length,
  };
};
