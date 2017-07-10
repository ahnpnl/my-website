import React from 'react'
import { shallow } from 'enzyme'
import Steps from './Steps'

describe('Steps component', () => {
  it('renders correctly without any issues', () => {
    const result = shallow(
      <Steps />
    )

    expect(result).toMatchSnapshot()
  })
})
