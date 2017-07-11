import React from 'react'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'
import Steps from './Steps'

describe('Steps component', () => {
  it('renders correctly without any issues', () => {
    const component = shallow(
      <Steps />
    )
    const result = shallowToJson(component)

    expect(result).toMatchSnapshot()
  })
})
