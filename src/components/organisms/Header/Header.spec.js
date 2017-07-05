import React from 'react'
import renderer from 'react-test-renderer'
import Header from './Header'

describe('Header components', () => {
  it('renders a logo and a navigation button on small screen', () => {
    const deviceInfo = {
      deviceType: {
        isSmall: true
      }
    }

    const result = renderer.create(
      <Header deviceInfo={deviceInfo} />
    ).toJSON()

    expect(result).toMatchSnapshot()
  })

  it('renders a logo and normal navigation on medium up screen', () => {
    const deviceInfo = {
      deviceType: {
        isSmall: false
      }
    }

    const result = renderer.create(
      <Header deviceInfo={deviceInfo} />
    ).toJSON()

    expect(result).toMatchSnapshot()
  })
})
