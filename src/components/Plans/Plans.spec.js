import React from 'react'
import { shallow } from 'enzyme'
import Plans from './Plans'

describe('Plans component', () => {
  it('renders without any issues', () => {
    const planItems = [
      {
        id: 1,
        title: "Premium",
        price: "$399/month",
        priceDetail: "That's only 13.30$ per meal",
        features: [
          {
            id: 1,
            description: "1 meal every day"
          },
          {
            id: 2,
            description: "Order 24/7"
          },
          {
            id: 3,
            description: "Access to newest creations"
          },
          {
            id: 4,
            description: "Free delivery"
          }
        ]
      }
    ]

    const result = shallow(
      <Plans planItems={planItems} />
    )

    expect(result).toMatchSnapshot()
  })
})
