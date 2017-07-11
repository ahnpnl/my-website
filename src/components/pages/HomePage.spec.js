import React from 'react'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'
import HomePage from './HomePage'

describe('HomePage component', () => {
  it('renders home page without any issues', () => {
    const component = shallow(
      <HomePage />
    )

    const result = shallowToJson(component)

    expect(result).toMatchSnapshot()
  })
})
