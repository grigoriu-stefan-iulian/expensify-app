import React from 'react'
import { shallow } from 'enzyme'
import LoadingPage from '../../components/LoadingPage'

test('should render LoadingPage component correctly', () => {
    const component = shallow(<LoadingPage />)
    expect(component).toMatchSnapshot()
})