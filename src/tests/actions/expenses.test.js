import { addExpense, editExpense, removeExpense } from '../../actions/expenses'

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
    const expenseData = {
        description: 'rent',
        amount: 123123,
        createdAt: 1000,
        note: 'This is last month rent'
    }
    const action = addExpense(expenseData)
    expect(action).toEqual({
        type: "ADD_EXPENSE",
        expense: {
            ...expenseData,
            id: expect.any(String)
        }
    })
})

test('should setup addExpense action object with default values', () => {
    const action = addExpense()
    expect(action).toEqual({
        type: "ADD_EXPENSE",
        expense: {
            description: '',
            amount: 0,
            createdAt: 0,
            note: '',
            id: expect.any(String)
        }
    })
})