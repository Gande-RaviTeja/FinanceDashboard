export const mockTransactions = [
  // Recent expenses
  { id: 1, date: new Date('2024-01-25').toISOString(), amount: -45.99, category: 'Food', type: 'Expense', description: 'Coffee & Breakfast' },
  { id: 2, date: new Date('2024-01-24').toISOString(), amount: -120.00, category: 'Transport', type: 'Expense', description: 'Gas' },
  { id: 3, date: new Date('2024-01-23').toISOString(), amount: -50.00, category: 'Entertainment', type: 'Expense', description: 'Movie tickets' },
  { id: 4, date: new Date('2024-01-22').toISOString(), amount: -89.50, category: 'Utilities', type: 'Expense', description: 'Electric bill' },
  { id: 5, date: new Date('2024-01-21').toISOString(), amount: -200.00, category: 'Groceries', type: 'Expense', description: 'Weekly groceries' },
  
  // Recent income
  { id: 6, date: new Date('2024-01-20').toISOString(), amount: 3500.00, category: 'Salary', type: 'Income', description: 'Monthly salary' },
  
  // More expenses
  { id: 7, date: new Date('2024-01-19').toISOString(), amount: -35.99, category: 'Food', type: 'Expense', description: 'Lunch' },
  { id: 8, date: new Date('2024-01-18').toISOString(), amount: -150.00, category: 'Shopping', type: 'Expense', description: 'Clothes' },
  { id: 9, date: new Date('2024-01-17').toISOString(), amount: -45.00, category: 'Utilities', type: 'Expense', description: 'Internet bill' },
  { id: 10, date: new Date('2024-01-16').toISOString(), amount: -22.50, category: 'Food', type: 'Expense', description: 'Dinner' },
  
  // Previous month expenses
  { id: 11, date: new Date('2024-01-15').toISOString(), amount: -175.00, category: 'Entertainment', type: 'Expense', description: 'Concert tickets' },
  { id: 12, date: new Date('2024-01-14').toISOString(), amount: -30.00, category: 'Transport', type: 'Expense', description: 'Public transport' },
  { id: 13, date: new Date('2024-01-13').toISOString(), amount: -65.00, category: 'Groceries', type: 'Expense', description: 'Fresh produce' },
  { id: 14, date: new Date('2024-01-12').toISOString(), amount: -40.00, category: 'Shopping', type: 'Expense', description: 'Books' },
  { id: 15, date: new Date('2024-01-11').toISOString(), amount: -55.50, category: 'Entertainment', type: 'Expense', description: 'Streaming subscription' },
  
  // Income from freelance
  { id: 16, date: new Date('2024-01-10').toISOString(), amount: 500.00, category: 'Freelance', type: 'Income', description: 'Web design project' },
  
  // More expenses
  { id: 17, date: new Date('2024-01-09').toISOString(), amount: -25.00, category: 'Utilities', type: 'Expense', description: 'Water bill' },
  { id: 18, date: new Date('2024-01-08').toISOString(), amount: -90.00, category: 'Transport', type: 'Expense', description: 'Car maintenance' },
  { id: 19, date: new Date('2024-01-07').toISOString(), amount: -38.75, category: 'Food', type: 'Expense', description: 'Restaurant' },
  { id: 20, date: new Date('2024-01-06').toISOString(), amount: -120.00, category: 'Groceries', type: 'Expense', description: 'Monthly groceries' },
  
  { id: 21, date: new Date('2024-01-05').toISOString(), amount: -15.00, category: 'Entertainment', type: 'Expense', description: 'Sports app subscription' },
  { id: 22, date: new Date('2024-01-04').toISOString(), amount: -200.00, category: 'Shopping', type: 'Expense', description: 'Running shoes' },
  { id: 23, date: new Date('2024-01-03').toISOString(), amount: -55.00, category: 'Food', type: 'Expense', description: 'Brunch' },
  { id: 24, date: new Date('2024-01-02').toISOString(), amount: -45.00, category: 'Transport', type: 'Expense', description: 'Taxi ride' },
  { id: 25, date: new Date('2024-01-01').toISOString(), amount: -100.00, category: 'Entertainment', type: 'Expense', description: 'New Year party' },
  
  // Previous month (December 2023)
  { id: 26, date: new Date('2023-12-28').toISOString(), amount: 3500.00, category: 'Salary', type: 'Income', description: 'Monthly salary' },
  { id: 27, date: new Date('2023-12-27').toISOString(), amount: -250.00, category: 'Shopping', type: 'Expense', description: 'Christmas gifts' },
  { id: 28, date: new Date('2023-12-25').toISOString(), amount: -180.00, category: 'Food', type: 'Expense', description: 'Christmas dinner' },
  { id: 29, date: new Date('2023-12-23').toISOString(), amount: -75.00, category: 'Entertainment', type: 'Expense', description: 'Holiday movie' },
  { id: 30, date: new Date('2023-12-20').toISOString(), amount: -95.00, category: 'Groceries', type: 'Expense', description: 'Holiday shopping' },
  
  { id: 31, date: new Date('2023-12-18').toISOString(), amount: -40.00, category: 'Food', type: 'Expense', description: 'Lunch' },
  { id: 32, date: new Date('2023-12-15').toISOString(), amount: -150.00, category: 'Shopping', type: 'Expense', description: 'Winter clothes' },
  { id: 33, date: new Date('2023-12-12').toISOString(), amount: -85.00, category: 'Transport', type: 'Expense', description: 'Monthly transit pass' },
  { id: 34, date: new Date('2023-12-10').toISOString(), amount: -200.00, category: 'Utilities', type: 'Expense', description: 'Heating bill' },
  { id: 35, date: new Date('2023-12-08').toISOString(), amount: -55.00, category: 'Food', type: 'Expense', description: 'Dinner party' },
  
  { id: 36, date: new Date('2023-12-05').toISOString(), amount: 250.00, category: 'Freelance', type: 'Income', description: 'Consulting project' },
  { id: 37, date: new Date('2023-12-03').toISOString(), amount: -30.00, category: 'Entertainment', type: 'Expense', description: 'Concert tickets' },
  { id: 38, date: new Date('2023-12-01').toISOString(), amount: -75.00, category: 'Groceries', type: 'Expense', description: 'Weekly shopping' },
  { id: 39, date: new Date('2023-11-28').toISOString(), amount: -120.00, category: 'Entertainment', type: 'Expense', description: 'Concert and drinks' },
  { id: 40, date: new Date('2023-11-25').toISOString(), amount: -45.00, category: 'Transport', type: 'Expense', description: 'Fuel' },
  
  { id: 41, date: new Date('2023-11-20').toISOString(), amount: 3500.00, category: 'Salary', type: 'Income', description: 'Monthly salary' },
  { id: 42, date: new Date('2023-11-18').toISOString(), amount: -210.00, category: 'Shopping', type: 'Expense', description: 'Black Friday deals' },
  { id: 43, date: new Date('2023-11-15').toISOString(), amount: -165.00, category: 'Groceries', type: 'Expense', description: 'Thanksgiving supplies' },
  { id: 44, date: new Date('2023-11-10').toISOString(), amount: -95.00, category: 'Entertainment', type: 'Expense', description: 'Movie and popcorn' },
  { id: 45, date: new Date('2023-11-08').toISOString(), amount: -40.00, category: 'Food', type: 'Expense', description: 'Fast food' },
];

export const categories = ['Food', 'Transport', 'Groceries', 'Utilities', 'Shopping', 'Entertainment', 'Salary', 'Freelance'];
