import React from 'react'
import numeral from 'numeral'
import { connect } from 'react-redux'
import selectExpenses from '../selectors/expenses'
import selectExpensesTotal from '../selectors/expenses-total'

export const ExpensesSummary = ({ expensesCount = [], expensesTotal }) => (
    <div className="page-header">
    <div className="content-container">
        <button
            className="button button__add-expense"
            to="/create"
        >
        Add Expense
       </button>

        <h1 className="page-header__title">
            Viewing <span>{expensesCount}</span> expense{expensesCount === 1 ?  '' : 's'} totalling <span>{numeral(expensesTotal / 100).format('$0,0.00')}</span>.
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