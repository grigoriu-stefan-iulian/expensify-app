// react-test-renderer
import React from 'react'
import { shallow } from 'enzyme'
//import toJSON from 'enzyme-to-json' // removes all the junk from the snapshot. Modified the jest.config to do this automatically
import Header from '../../components/Header'

test('should render Header correctly', () => {
    const wrapper = shallow(<Header />)
    expect(wrapper).toMatchSnapshot()
    
    
    // expect(wrapper.find('h1').text()).toBe('Expensify') // avem un singur h1 
    // const renderer = new ReactShallowRenderer()
    // renderer.render(<Header />)
    // expect(renderer.getRenderOutput()).toMatchSnapshot()
})