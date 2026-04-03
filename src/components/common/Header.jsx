import { useDataContext } from '../../context/DataContext';
import ThemeSelector from './ThemeSelector';
import styles from './Header.module.css';

function Header({ currentPage, onPageChange }) {
  const { selectedRole, setSelectedRole } = useDataContext();

  const navItems = [
    { id: 'dashboard', label: 'Dashboard' },
    { id: 'transactions', label: 'Transactions' },
    { id: 'insights', label: 'Insights' },
  ];

  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <div className={styles.logoSection}>
          <h1 className={styles.logo}>Finance Dashboard</h1>
        </div>

        <nav className={styles.nav}>
          {navItems.map(item => (
            <button
              key={item.id}
              className={`${styles.navItem} ${currentPage === item.id ? styles.active : ''}`}
              onClick={() => onPageChange(item.id)}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className={styles.rightSection}>
          <ThemeSelector />
          <h4>Role:</h4>
          <select
            value={selectedRole}
            onChange={(e) => setSelectedRole(e.target.value)}
            className={styles.roleSelector}
          > 
            <option value="Viewer"> Viewer</option>
            <option value="Admin">  Admin</option>
          </select>
        </div>
      </div>
    </header>
  );
}

export default Header;
