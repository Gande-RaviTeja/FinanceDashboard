import React, { createContext, useReducer, useState, useEffect } from 'react';
import { mockTransactions } from '../data/mockTransactions';

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [selectedRole, setSelectedRole] = useState('Viewer');
  const [theme, setTheme] = useState(() => {
    // Get theme from localStorage or system preference
    const saved = localStorage.getItem('theme');
    if (saved) return saved;
    
    if (typeof window !== 'undefined' && window.matchMedia) {
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    return 'light';
  });

  // Apply theme to document on mount and when theme changes
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);
  
  const initialState = {
    transactions: mockTransactions,
    filters: {
      category: null,
      type: 'All',
      dateRange: 'All time',
      search: '',
    },
    editingTransaction: null,
  };

  const dataReducer = (state, action) => {
    switch (action.type) {
      case 'SET_FILTER': {
        const { filterKey, value } = action.payload;
        return {
          ...state,
          filters: {
            ...state.filters,
            [filterKey]: value,
          },
        };
      }
      case 'RESET_FILTERS':
        return {
          ...state,
          filters: initialState.filters,
        };
      case 'ADD_TRANSACTION': {
        const newTransaction = {
          id: Math.max(...state.transactions.map(t => t.id), 0) + 1,
          ...action.payload,
          date: new Date(action.payload.date).toISOString(),
        };
        return {
          ...state,
          transactions: [newTransaction, ...state.transactions],
        };
      }
      case 'UPDATE_TRANSACTION': {
        return {
          ...state,
          transactions: state.transactions.map(t =>
            t.id === action.payload.id
              ? { ...t, ...action.payload }
              : t
          ),
        };
      }
      case 'DELETE_TRANSACTION': {
        return {
          ...state,
          transactions: state.transactions.filter(t => t.id !== action.payload),
        };
      }
      case 'SET_EDITING_TRANSACTION':
        return {
          ...state,
          editingTransaction: action.payload,
        };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(dataReducer, initialState);

  const value = {
    state,
    dispatch,
    selectedRole,
    setSelectedRole,
    theme,
    setTheme,
  };

  return (
    <DataContext.Provider value={value}>
      {children}
    </DataContext.Provider>
  );
};

export const useDataContext = () => {
  const context = React.useContext(DataContext);
  if (!context) {
    throw new Error('useDataContext must be used within DataProvider');
  }
  return context;
};
