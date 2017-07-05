import React from 'react'
import renderer from 'react-test-renderer'
import Hero from './Hero'

describe('Hero component', () => {
  it('renders correctly without issues', () => {
    const result = renderer.create(
      <Hero />
    ).toJSON()

    expect(result).toMatchSnapshot()
  })
})
