import React from 'react'

import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'

import Features from './Features'

describe('Features component', () => {
  it('renders correctly without issues', () => {
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
        text: "text 3"
      },
      {
        id: 4,
        title: "title 4",
        text: "text 4"
      },
    ]

    const component = shallow(
      <Features featureItems={featureItems} />
    )

    const result = shallowToJson(component)

    expect(result).toMatchSnapshot()
  })
})
