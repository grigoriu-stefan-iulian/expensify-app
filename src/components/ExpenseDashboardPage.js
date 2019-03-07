import React from 'react'
import ConnectedExpenseList from './ExpenseList'
import ExpenseListFilters from './ExpenseListFilters'

const ExpenseDashboardPage = () => (
    <div>
        <h2> This is from Dashboard!</h2>
        <ExpenseListFilters />
        <ConnectedExpenseList />
    </div>
)


export default ExpenseDashboardPage