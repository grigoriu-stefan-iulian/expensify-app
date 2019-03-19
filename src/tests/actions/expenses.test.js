import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { startAddExpense, addExpense, editExpense, removeExpense } from '../../actions/expenses'
import expenses from '../fixtures/expenses'
import database from '../../firebase/firebase'

// id: expect.any(String)

const createMockStore = configureMockStore([thunk])

test('should setup remove expense action object', () => {
    const action = removeExpense({ id: '123qwe' })
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123qwe'
    })
})

test('should setup edit expense action object', () => {
    const action = editExpense('123qwe', { note: 'new value' })
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '123qwe',
        updates: { note: 'new value' }
    })
})

test('should setup addExpense action object with received values', () => {
    const action = addExpense(expenses[1])
    expect(action).toEqual({
        type: "ADD_EXPENSE",
        expense: expenses[1]
    })
})

test('should add expense to database and store', (done) => {
    const store = createMockStore({})
    const expenseData = {
        description: 'ssss',
        createdAt: 122312,
        note: 'ddd',
        amount: 123123
    }
    store.dispatch(startAddExpense(expenseData)).then(() => {
        const actions = store.getActions()
        expect(actions[0]).toEqual({
            type: "ADD_EXPENSE",
            expense: {
                id: expect.any(String),
                ...expenseData
            }
        })

        return database.ref(`expenses/${actions[0].expense.id}`).once('value')
    }).then(snapshot => {
        expect(snapshot.val()).toEqual(expenseData)
        done()
    })
})

test('should add expense with defaults to database and store', () => {
    const store = createMockStore({})
    const expenseDefaultData = {
        description: '',
        note: '',
        amount: 0,
        createdAt: 0
    }
    store.dispatch(startAddExpense({})).then(() => {
        const actions = store.getActions()
        expect(actions[0]).toEqual({
            type: "ADD_EXPENSE",
            expense: {
                id: expect.any(String),
                ...expenseDefaultData
            }
        })

        return database.ref(`expenses/${actions[0].expense.id}`).once('value')
    }).then(snapshot => {
        expect(snapshot.val()).toEqual(expenseDefaultData)
        done()
    })
})
// test('should setup addExpense action object with default values', () => {
//     const action = addExpense()
//     expect(action).toEqual({
//         type: "ADD_EXPENSE",
//         expense: {
//             description: '',
//             amount: 0,
//             createdAt: 0,
//             note: '',
//             id: expect.any(String)
//         }
//     })
// })