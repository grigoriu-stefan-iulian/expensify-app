import filtersReducer from '../../reducers/filters'
import moment from 'moment'

test('should setup default filter values', () => {
    const state = filtersReducer(undefined, { type: '@@INIT' })
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    })
})

test('should set sorby to amount', () => {
    const state = filtersReducer(undefined, { type: 'SORT_BY_AMOUNT' })
    expect(state.sortBy).toBe('amount')
})

test('should set sortBy to date', () => {
    const currentState = {
        text: '',
        sortBy: 'amount'
    }
    const action = { type: 'SORT_BY_DATE' }
    const state = filtersReducer(currentState, action)
    expect(state.sortBy).toBe('date')
})

//should set text filter
test('should set text filter', () => {
    const state = filtersReducer(undefined, { type: 'SET_TEXT_FILTER', text: 'testing' })
    expect(state.text).toBe('testing')
})

//should set start date filter 
test('should set start date filter', () => {
    const state = filtersReducer(undefined, { type: 'SET_START_DATE', startDate: 1000 })
    expect(state.startDate).toBe(1000)
})

// should set end date filter
test('should set end date filter', () => {
    const state = filtersReducer(undefined, { type: 'SET_END_DATE', endDate: -1000 })
    expect(state.endDate).toBe(-1000)
})
