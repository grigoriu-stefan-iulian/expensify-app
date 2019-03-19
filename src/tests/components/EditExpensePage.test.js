import React from 'react'
import { shallow } from 'enzyme'
import expenses from '../fixtures/expenses'
import { EditExpensePage } from '../../components/EditExpensePage'

let startEditExpenseSpy, startRemoveExpenseSpy, historySpy, wrapper
// lifecycle methods: creates fresh copies of these before each test
beforeEach(() => {
    startEditExpenseSpy = jest.fn()
    startRemoveExpenseSpy = jest.fn()
    historySpy = { push: jest.fn() }
    wrapper = shallow(<EditExpensePage 
        startEditExpense={startEditExpenseSpy} 
        startRemoveExpense={startRemoveExpenseSpy} 
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
    expect(startEditExpenseSpy).toHaveBeenLastCalledWith(expenses[1].id, expenses[1])})

test('should handle startRemoveExpenseSpy', () => {
    wrapper.find('button').simulate('click')
    expect(historySpy.push).toHaveBeenLastCalledWith('/')
    expect(startRemoveExpenseSpy).toHaveBeenLastCalledWith({ id: expenses[1].id })
})