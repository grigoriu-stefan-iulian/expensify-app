import React from 'react'
import { connect } from 'react-redux'
import ExpenseListItem from './ExpenseListItem'
import selectExpenses from '../selectors/expenses'

export const ExpenseList = (props) => (
    <div className="content-container">

        <div className="expenses-list">
            <div className="display-on-mobile">Expenses</div>
            <div className="display-on-desktop">Expense</div>
            <div className="display-on-desktop">Amount</div>
        </div>
        <div className="expenses-list__content">
             {
            props.expenses.length === 0 ? (
                <p className="expenses-list--no-expenses">No Expenses</p>
            ) : (
                    props.expenses.map(expense => <ExpenseListItem key={expense.id} {...expense} />
                    )
                )
        }
        </div>
       
    </div>
)

// 1. Connect the store with the component. This is a HOC
/* 
const ConnectedExpenseList = connect((state) => {
return {
  expenses: state.expenses,
  filters: state.filters}
})(ExpenseList)

export default ConnectedExpenseList
*/

// 2 Take the function inside connect() and put it into a separate function

const mapStateToProps = (state) => ({
    expenses: selectExpenses(state.expenses, state.filters)                //state.expenses, -> this will render all the expenses, not the filtered ones because
    //it has access to the full expenses list not the filtered ones so we change it with selectedExpenses from our ./selectors
    //filters: state.filters // we dont need this
})

// 3. No need to define a variable then export default it
export default connect(mapStateToProps)(ExpenseList)


