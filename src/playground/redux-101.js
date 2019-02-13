import { createStore } from 'redux'

//Action Generators - functions that return Action Objects

const incrementCount = ({ incrementBy = 1 } = {}) => ({
    type: 'INCREMENT',
    incrementBy
})

const decrementCount = ({ decrementBy = 1 } = {}) => ({
    type: 'DECREMENT',
    decrementBy
})

const setCount = ({ count }) => ({ 
    type: 'SET',
    count 
})

const resetCount = () => ({
    type: 'RESET',
})

const countReducer = (state = { count: 0 }, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                count: state.count + action.incrementBy
            }
        case 'DECREMENT':
            return {
                count: state.count - action.decrementBy
            }
        case 'RESET':
            return {
                count: 0
            }
        case 'SET':
            return {
                count: action.count
            }
        default:
            return state
    }
}

const store = createStore(countReducer)

const unsubscribe = store.subscribe(() => {
    console.log(store.getState())
})

//Actions - an object that gets sent to the store
store.dispatch(incrementCount({ incrementBy: 10 }))

store.dispatch(decrementCount({ decrementBy: 4 }))

store.dispatch(resetCount())
store.dispatch(incrementCount())

store.dispatch(setCount({ count: -101 }))