 Finance Dashboard

A clean and interactive finance dashboard built with React, showcasing modern UI/UX patterns with role-based access control, transaction management, and financial insights.

  Features

 Dashboard Overview
- Summary Cards: Total Balance, Income, and Expenses at a glance
- Balance Trend Chart: 12-month balance visualization with LineChart
- Spending Breakdown: Category-wise expense distribution with PieChart

 Transactions Management
- Transaction Table: Browse all transactions with sorting and filtering
- Advanced Filters: Filter by category, type, date range, and search
- Admin CRUD: Role-based add/edit/delete functionality
- Transaction Modal: Intuitive form for adding/editing transactions

 Financial Insights
- Computed Metrics: Top spending category, saving rate, month-over-month changes
- Insight Cards: Visual representation of key financial metrics
- Financial Tips: Dynamic recommendations based on your spending patterns

 Role-Based UI
- Viewer Role: Read-only access to all financial data
- Admin Role: Full CRUD operations on transactions
- Easy Role Switching: Toggle between roles via dropdown in header

 Responsive Design
- Mobile First: Optimized for 375px screens (phones)
- Tablet Support: Responsive layout at 768px breakpoints
- Desktop: Full-featured experience at 1440px+ screens
- No Layout Breaks: Graceful degradation on all screen sizes

  Tech Stack

- Framework: React 18.2.0
- Build Tool: Vite 5.0.0
- Visualizations: Recharts 2.10.0
- Styling: CSS Modules
- State Management: Context API with useReducer
- Development: Node.js + npm

  Installation

1. Clone or navigate to the project
   bash
   cd finance-dashboard
   

2. Install dependencies
   bash
   npm install
   

3. Start development server
   bash
   npm run dev
   

The app will open at `http://localhost:5173` (or the next available port)

  Project Structure


src/
├── components/
│   ├── common/               Shared components (Header, RoleSelector, EmptyState)
│   ├── dashboard/            Dashboard page (SummaryCards, Charts)
│   ├── transactions/         Transactions page (Table, Filters, Modal)
│   └── insights/             Insights page (InsightCards, Analytics)
├── context/
│   └── DataContext.jsx       Global state with reducer
├── hooks/
│   ├── useTransactions.js    Transaction filtering & search logic
│   ├── useInsights.js        Insight computation
│   └── useRoleAccess.js      Role-based permissions
├── data/
│   └── mockTransactions.js   45+ realistic mock transactions
├── styles/
│   └── globals.module.css    Global CSS variables & utilities
└── App.jsx                   Main app component with routing


  Key Components

 Dashboard (`Dashboard.jsx`)
- Displays summary cards with balance, income, and expenses
- Shows 12-month balance trend with LineChart
- Displays spending breakdown by category with PieChart
- All calculations memoized for performance

 Transactions (`Transactions.jsx`)
- Multi-filter interface (category, type, date range, search)
- Transaction table with color-coded rows (income/expense)
- Admin-only add/edit/delete actions
- Form validation on transaction modal

 Insights (`Insights.jsx`)
- 6 insight cards with computed metrics
- Dynamic financial tips based on spending patterns
- Trend indicators showing positive/negative changes
- Savings rate calculation and recommendations

 Header (`Header.jsx`)
- Sticky navigation between 3 main sections
- Role selector dropdown (Viewer/Admin)
- Responsive on mobile with collapsed navigation

  Styling

- CSS Modules: Scoped, conflict-free styles
- CSS Variables: 100+ variables for colors, spacing, typography
- Responsive Breakpoints:
  - Mobile: < 768px
  - Tablet: 768px - 1024px
  - Desktop: > 1024px
- Accessibility: Focus states, ARIA labels, color contrast

 State Management

DataContext manages:
- `transactions`: Array of all transactions
- `filters`: Active filters (category, type, date range, search)
- `editingTransaction`: Currently editing transaction (if any)
- `selectedRole`: Current user role (Viewer/Admin)

Reducer Actions:
- `SET_FILTER`: Update a filter value
- `RESET_FILTERS`: Clear all filters
- `ADD_TRANSACTION`: Add new transaction
- `UPDATE_TRANSACTION`: Modify existing transaction
- `DELETE_TRANSACTION`: Remove transaction

  Data Flow

1. Mock Data: 45 transactions loaded from `mockTransactions.js`
2. Context: Global state in `DataContext`
3. Hooks: Custom hooks compute filtered data and insights
4. Components: Consume hooks and render with CSS Modules
5. User Actions: Dispatch actions to update context, causing re-renders

  Testing the App

 Test Dashboard
-  Verify summary card totals match transactions
-  Hover on balance trend to see values
-  Click category on pie chart (prepares for filtering)

 Test Transactions
-  Filter by category and verify table updates
-  Search by description and see results
-  Toggle between Income/Expense types
-  Change date range (Last 30 days, Last 3 months, All time)
-  Stack multiple filters together
-  Click reset filters to clear all

 Test Admin Features
-  Switch role to Admin
-  Click "Add Transaction" button
-  Fill form and submit (new transaction appears in table)
-  Click edit button on a row
-  Click delete button and confirm

 Test Insights
-  Verify top spending category is correct
-  Check savings rate calculation
-  Review month-over-month change

 Test Responsive
-  Resize browser to 375px (mobile)
-  Resize to 768px (tablet)
-  Resize to 1440px (desktop)
-  Verify layout doesn't break





This creates an optimized `dist/` folder ready for deployment.

  Mock Data Details

45 transactions spanning ~3 months with:
- Multiple categories: Food, Transport, Groceries, Utilities, Shopping, Entertainment, Salary, Freelance
- Mix of income (Salary $3500/month, Freelance $250-$500) and expenses
- Realistic amounts and descriptions
- Date range from Nov 2023 - Jan 2024


 