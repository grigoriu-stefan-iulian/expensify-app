import React from 'react'
import { shallow } from 'enzyme'
import { ExpensesSummary } from '../../components/ExpensesSummary'

test('should render the ExpensesSummary correctly with 1 expense', () => {
    const wrapper = shallow(<ExpensesSummary expensesCount={1} expensesTotal={112.2} />)
    expect(wrapper).toMatchSnapshot()
})

test('should render the ExpensesSummary correctly with multiple expenses', () => {
    const wrapper = shallow(<ExpensesSummary expensesCount={21} expensesTotal={11334455662.2}/>)
    expect(wrapper).toMatchSnapshot()
})