import React from 'react'
import renderer from 'react-test-renderer'
import Footer from './Footer'

describe('Footer component', () => {
  it('renders without any issues', () => {
    const result = renderer.create(
      <Footer />
    ).toJSON()

    expect(result).toMatchSnapshot()
  })
})
