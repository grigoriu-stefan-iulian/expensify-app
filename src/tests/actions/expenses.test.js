import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { 
    setExpenses,
    startSetExpenses,
    addExpense,
    startAddExpense,
    editExpense,
    startEditExpense,
    removeExpense,
    startRemoveExpense
} from '../../actions/expenses'
import expenses from '../fixtures/expenses'
import database from '../../firebase/firebase'

// id: expect.any(String)

const uid = 'test_id'
const defaultAuthState = {auth: { uid } }
const createMockStore = configureMockStore([thunk])

beforeEach((done) => {
    const expensesData = {}
    expenses.forEach(({ id, description, note, amount, createdAt }) => {
        expensesData[id] = { description, note, amount, createdAt }
    })
    database.ref(`users/${uid}/expenses`).set(expensesData).then(() => done())
})

test('should setup remove expense action object', () => {
    const action = removeExpense({ id: '123qwe' })
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123qwe'
    })
})

//challenge
test('should remove expense from firebase', (done) => {
    const store = createMockStore(defaultAuthState)
    const id = expenses[0].id
    store.dispatch(startRemoveExpense({ id })).then(() => {
        const actions = store.getActions()
        expect(actions[0]).toEqual({
            type: 'REMOVE_EXPENSE',
            id
        })
        return database.ref(`users/${uid}/expenses/${id}`).once('value')
    }).then((snapshot) => {
        expect(snapshot.val()).toBeFalsy()
        done()
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

//challenge
test('should edit expense from firebase', (done) => {
    const store = createMockStore(defaultAuthState)
    const id = expenses[0].id
    const updates = {
        name: 'This is working'
    }
     store.dispatch(startEditExpense(id, updates)).then(() => {
         const actions = store.getActions()
         expect(actions[0]).toEqual({
             type: 'EDIT_EXPENSE',
             id,
             updates
         })
         return database.ref(`users/${uid}/expenses/${id}`).once('value')
     }).then((snapshot) => {
        expect(snapshot.val().name).toBe(updates.name)
        done()
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
    const store = createMockStore(defaultAuthState)
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

        return database.ref(`users/${uid}/expenses/${actions[0].expense.id}`).once('value')
    }).then(snapshot => {
        expect(snapshot.val()).toEqual(expenseData)
        done()
    })
})

test('should add expense with defaults to database and store', () => {
    const store = createMockStore(defaultAuthState)
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

        return database.ref(`users/${uid}/expenses/${actions[0].expense.id}`).once('value')
    }).then(snapshot => {
        expect(snapshot.val()).toEqual(expenseDefaultData)
        done()
    })
})

test('should setup setExpenses action object with data', () => {
    const action = setExpenses(expenses)
expect(action).toEqual({
    type: 'SET_EXPENSES',
    expenses
})
})

test('should fetch the expenses from firebase', (done) => {
    const store = createMockStore(defaultAuthState)
    store.dispatch(startSetExpenses()).then(() => {
        const actions = store.getActions()
        expect(actions[0]).toEqual({
            type: 'SET_EXPENSES',
            expenses
        })
        done()
    })
})