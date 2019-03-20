import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import AppRouter from './routers/AppRouter'
import configureStore from './store/configureStore'
import { setTextFilter } from './actions/filters'
import { startSetExpenses } from './actions/expenses'
import getVisibleExpenses from './selectors/expenses'
import 'normalize.css/normalize.css';
import './styles/styles.scss'
import 'react-dates/lib/css/_datepicker.css'
import { firebase } from './firebase/firebase'

const store = configureStore()

const jsx = (
    <Provider store={store}>
            <AppRouter />
    </Provider>
)

ReactDOM.render(<p>Loading...</p>, document.getElementById('app'))

store.dispatch(startSetExpenses()).then(() => {
    ReactDOM.render(jsx, document.getElementById('app'))
})

// on app load check auth status and do something if logged in or logged out
firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        console.log('logged in')
    } else {
        console.log('logged out')
    }
})