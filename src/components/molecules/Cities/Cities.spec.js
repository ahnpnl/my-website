import React from 'react'
import { shallow } from 'enzyme'
import Cities from './Cities'

describe('Cities component', () => {
  it('renders correctly without any issues', () => {
    const result = shallow(
      <Cities />
    )

    expect(result).toMatchSnapshot()
  })
})
