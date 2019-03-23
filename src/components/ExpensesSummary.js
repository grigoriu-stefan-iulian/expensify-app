import React from 'react'
import numeral from 'numeral'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import selectExpenses from '../selectors/expenses'
import selectExpensesTotal from '../selectors/expenses-total'

export const ExpensesSummary = ({ expensesCount = [], expensesTotal }) => (
    <div className="page-header">
    <div className="content-container">
        <h1 className="page-header__title">
            Viewing <span>{expensesCount}</span> expense{expensesCount === 1 ?  '' : 's'} totalling <span>{numeral(expensesTotal / 100).format('$0,0.00')}</span>.
       <div className="page-header__actions">
         <Link
            className="button button--add-expense"
            to="/create"
        >
        Add Expense
       </Link>
       </div>
        </h1>
    </div>
       
    </div>
)

const mapStateToProps = (state) => {
const visibleExpenses = selectExpenses(state.expenses, state.filters)

return {
    expensesCount: visibleExpenses.length,
    expensesTotal: selectExpensesTotal(visibleExpenses)
}
}

export default connect(mapStateToProps)(ExpensesSummary)