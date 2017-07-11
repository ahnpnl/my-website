import React from 'react'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'
import Cities from './Cities'

describe('Cities component', () => {
  it('renders correctly without any issues', () => {
    const component = shallow(
      <Cities />
    )

    const result = shallowToJson(component)
    expect(result).toMatchSnapshot()
  })
})
