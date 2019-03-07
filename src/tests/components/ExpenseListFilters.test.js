import React from 'react'
import { shallow } from 'enzyme'
import { filters, altFilters } from '../fixtures/filters'
import { ExpensesListFilters } from '../../components/ExpenseListFilters'
import moment from 'moment'

let setTextFilterSpy, sortByDateSpy, sortByAmountSpy, setStartDateSpy, setEndDateSpy, wrapper

beforeEach(() => {
    setTextFilterSpy = jest.fn()
    sortByDateSpy = jest.fn()
    sortByAmountSpy = jest.fn()
    setStartDateSpy = jest.fn()
    setEndDateSpy = jest.fn()
    wrapper = shallow(<ExpensesListFilters
        filters={filters}
        setTextFilter={setTextFilterSpy}
        sortByDate={sortByDateSpy}
        sortByAmount={sortByAmountSpy}
        setStartDate={setStartDateSpy}
        setEndDate={setEndDateSpy}
    />
    )
})

test('should render the ExpenseListFilters component', () => {
    expect(wrapper).toMatchSnapshot()
})

test('should render the ExpenseListFilters with alt data component', () => {
    wrapper.setProps({
        filters: altFilters
    })
    expect(wrapper).toMatchSnapshot()
})

test('should handle text change', () => {
    const value = 'rent'
    wrapper.find('input').simulate('change', { target: { value } })
    expect(setTextFilterSpy).toHaveBeenLastCalledWith(value)
})

test('should sort by date', () => {
    wrapper.setProps({
        filters: altFilters
    })
    const value = 'date'
    wrapper.find('select').simulate('change', { target: { value } })
    expect(sortByDateSpy).toHaveBeenCalled()
})

test('should sort by amount', () => {
    const value = 'amount'
    wrapper.find('select').simulate('change', { target: { value } })
    expect(sortByAmountSpy).toHaveBeenCalled()
})

test('should handle date change', () => {
    const startDate = moment(0).add(4, 'years')
    const endDate = moment(0).add(6, 'years')
    wrapper.find('DateRangePicker').prop('onDatesChange')({ startDate, endDate })
    expect(setStartDateSpy).toHaveBeenLastCalledWith(startDate)
    expect(setEndDateSpy).toHaveBeenLastCalledWith(endDate)
})

test('should handle date focus change', () => {
    const focused = 'endDate'
    wrapper.find('DateRangePicker').prop('onFocusChange')( focused )
    expect(wrapper.state('calendarFocused')).toBe(focused)
})