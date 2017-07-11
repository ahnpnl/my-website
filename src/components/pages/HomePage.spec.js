import React from 'react'
import { shallow } from 'enzyme'
import HomePage from './HomePage'

describe('HomePage component', () => {
  it('renders home page without any issues', () => {
    const result = shallow(
      <HomePage />
    )

    expect(result).toMatchSnapshot()
  })
})
