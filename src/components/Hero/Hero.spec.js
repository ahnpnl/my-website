import React from 'react'
import { shallow } from 'enzyme'
import Hero from './Hero'

describe('Hero component', () => {
  it('renders correctly without issues', () => {
    const result = shallow(
      <Hero />
    )

    expect(result).toMatchSnapshot()
  })
})
