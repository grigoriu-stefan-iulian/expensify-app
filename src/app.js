import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import AppRouter from './routers/AppRouter'
import configureStore from './store/configureStore'
import { setTextFilter } from './actions/filters'
import { addExpense } from './actions/expenses'
import getVisibleExpenses from './selectors/expenses'
import 'normalize.css/normalize.css';
import './styles/styles.scss'
import 'react-dates/lib/css/_datepicker.css'

const store = configureStore()

store.subscribe(() => {
    const state = store.getState()
    console.log(getVisibleExpenses(state.expenses, state.filters))
})

store.dispatch(addExpense({ description: 'Gas bill', amount: 333 }))
store.dispatch(addExpense({ description: 'rent bill', amount: 111000 }))
store.dispatch(addExpense({ description: 'water bill', amount: 1500, createdAt: 1000 }))

//store.dispatch(setTextFilter('gas'))

// Change text filter to 'water' after 3 seconds
// setTimeout(() => {
//     store.dispatch(setTextFilter('water'))
// }, 3000)


const jsx = (
    <Provider store={store}>
            <AppRouter />
    </Provider>
)

ReactDOM.render(jsx, document.getElementById('app'))
