import React from 'react'
import Features from './Features'
import { shallow } from 'enzyme'

describe('Hero component', () => {
  it('Features correctly without issues', () => {
    const featureItems = [
      {
        id: 1,
        title: "title 1",
        text: "text 1"
      },
      {
        id: 2,
        title: "title 2",
        text: "text 2"
      },
      {
        id: 3,
        title: "title 3",
        text: "text 3",
        image: {
          url: 'Example image url',
          alt: "Image 1"
        }
      },
      {
        id: 4,
        title: "title 4",
        text: "text 4",
        image: {
          url: 'Example image url',
          alt: "Image 2"
        }
      },
    ]

    const result = shallow(
      <Features featureItems={featureItems} />
    )

    expect(result).toMatchSnapshot()
  })
})
