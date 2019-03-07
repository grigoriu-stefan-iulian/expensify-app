import expensesReducer from '../../reducers/expenses'
import expenses from '../fixtures/expenses'

test ('should set default state', () => {
    const state = expensesReducer(undefined, { type: '@@INIT' })
    expect(state).toEqual([])
})

test('should remove expense by id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    }
    const state = expensesReducer(expenses, action)
    expect(state).toEqual([ expenses[0], expenses[2]])
})

test('should not remove expenses if no id found', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: '-1'
    }
    const state = expensesReducer(expenses, action)
    expect(state).toEqual(expenses)
})

// add expense
test('should add new expense', () => {
    const action = {
        type: 'ADD_EXPENSE',
        expense: {
            description: 'rent new',
            note: 'some note'
        }
    }
    const state = expensesReducer(expenses, action)
    expect(state).toEqual([...expenses, action.expense])
})

// should edit an expense
test('should edit expense', () => {
    const action = {
        type: 'EDIT_EXPENSE',
        id: expenses[1].id,
        updates: {
            description: 'rent new',
            note: 'some note'
        }
    }
    const state = expensesReducer(expenses, action)
    expect(state).toEqual([expenses[0], {...expenses[1], ...action.updates}, expenses[2]])
})

// should not edit an expense if id not found
test('should not edit expense if id not found', () => {
    const action = {
        type: 'EDIT_EXPENSE',
        id: "-1",
        updates: {
            description: 'rent new',
            note: 'some note'
        }
    }
    const state = expensesReducer(expenses, action)
    expect(state).toEqual([...expenses])
})
