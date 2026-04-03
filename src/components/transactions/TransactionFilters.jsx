import { useDataContext } from '../../context/DataContext';
import { categories } from '../../data/mockTransactions';
import styles from './TransactionFilters.module.css';

function TransactionFilters() {
  const { state, dispatch } = useDataContext();
  const { filters } = state;

  const handleFilterChange = (filterKey, value) => {
    dispatch({
      type: 'SET_FILTER',
      payload: { filterKey, value },
    });
  };

  const handleResetFilters = () => {
    dispatch({ type: 'RESET_FILTERS' });
  };

  return (
    <div className={styles.filterContainer}>
      <div className={styles.filtersGrid}>
        <div className={styles.filterGroup}>
          <label htmlFor="search" className={styles.label}>
              Search
          </label>
          <input
            id="search"
            type="text"
            placeholder="Search by description or category..."
            value={filters.search}
            onChange={(e) => handleFilterChange('search', e.target.value)}
            className={styles.input}
          />
        </div>

        <div className={styles.filterGroup}>
          <label htmlFor="category" className={styles.label}>
              Category
          </label>
          <select
            id="category"
            value={filters.category || ''}
            onChange={(e) => handleFilterChange('category', e.target.value || null)}
            className={styles.select}
          >
            <option value="">All Categories</option>
            {categories.map(cat => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>

        <div className={styles.filterGroup}>
          <label htmlFor="type" className={styles.label}>
              Type
          </label>
          <select
            id="type"
            value={filters.type}
            onChange={(e) => handleFilterChange('type', e.target.value)}
            className={styles.select}
          >
            <option value="All">All Types</option>
            <option value="Income">Income</option>
            <option value="Expense">Expense</option>
          </select>
        </div>

        <div className={styles.filterGroup}>
          <label htmlFor="dateRange" className={styles.label}>
            Date Range
          </label>
          <select
            id="dateRange"
            value={filters.dateRange}
            onChange={(e) => handleFilterChange('dateRange', e.target.value)}
            className={styles.select}
          >
            <option value="All time">All time</option>
            <option value="Last 30 days">Last 30 days</option>
            <option value="Last 3 months">Last 3 months</option>
          </select>
        </div>
      </div>

      <button onClick={handleResetFilters} className={styles.resetButton}>
        ↺ Reset Filters
      </button>
    </div>
  );
}

export default TransactionFilters;
