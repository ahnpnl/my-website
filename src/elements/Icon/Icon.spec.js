import React from 'react'
import renderer from 'react-test-renderer'
import Icon from './Icon'

describe('Icon component', () => {
  it('renders a facebook Icon', () => {
    const result = renderer.create(
      <Icon name="facebook"/>
    ).toJSON()
    expect(result).toMatchSnapshot()
  })
})
