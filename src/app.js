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

const store = configureStore()
store.subscribe(() => {
    const state = store.getState()
    console.log(getVisibleExpenses(state.expenses, state.filters))
})

store.dispatch(addExpense({ description: 'water bill', amount: 500 }))
store.dispatch(addExpense({ description: 'Gas bill', amount: 500 }))
store.dispatch(setTextFilter('gas'))

const jsx = (
    <Provider store={store}>
            <AppRouter />
    </Provider>
)

ReactDOM.render(jsx, document.getElementById('app'))
