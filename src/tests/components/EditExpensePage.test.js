import React from 'react'
import { shallow } from 'enzyme'
import expenses from '../fixtures/expenses'
import { EditExpensePage } from '../../components/EditExpensePage'

let editExpenseSpy, removeExpenseSpy, historySpy, wrapper
// lifecycle methods: creates fresh copies of these before each test
beforeEach(() => {
    editExpenseSpy = jest.fn()
    removeExpenseSpy = jest.fn()
    historySpy = { push: jest.fn() }
    wrapper = shallow(<EditExpensePage 
        editExpense={editExpenseSpy} 
        removeExpense={removeExpenseSpy} 
        history={historySpy} 
        expense={expenses[1]}
        />)
})

test('should render EditExpense page', () => {
    expect(wrapper).toMatchSnapshot()
})

test('should handle EditExpense', () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1])
    expect(historySpy.push).toHaveBeenLastCalledWith('/')
    expect(editExpenseSpy).toHaveBeenLastCalledWith(expenses[1].id, expenses[1])})

test('should handle removeExpense', () => {
    wrapper.find('button').simulate('click')
    expect(historySpy.push).toHaveBeenLastCalledWith('/')
    expect(removeExpenseSpy).toHaveBeenLastCalledWith({ id: expenses[1].id })
})