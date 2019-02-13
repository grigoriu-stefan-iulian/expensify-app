import React from 'react'
import { connect } from 'react-redux'
import filters from '../reducers/filters';

const ExpenseList = (props) => (
    <div>
        <h1>ExpenseList</h1>
        <p>{props.expenses.length}</p>
        <p>{props.filters.text}</p>
    </div>
)

const mapStateToProps = (state) => ({ 
    expenses: state.expenses,
    filters: state.filters
})

export default connect(mapStateToProps)(ExpenseList)
