import React from 'react'
import Meals from './Meals'
import { shallow } from 'enzyme'

describe('Meals component', () => {
  it('renders correctly without issues', () => {
    const mealItems = [
      {
        id: 1,
        imageURL: "imageURL 1",
        alt: "alt 1"
      },
      {
        id: 2,
        imageURL: "imageURL 2",
        alt: "alt 2"
      },
      {
        id: 3,
        imageURL: "imageURL 3",
        alt: "alt 3"
      },
      {
        id: 4,
        imageURL: "imageURL 4",
        alt: "alt 4"
      },
      {
        id: 5,
        imageURL: "imageURL 5",
        alt: "alt 5"
      },
      {
        id: 4,
        imageURL: "imageURL 6",
        alt: "alt 4"
      },
      {
        id: 4,
        imageURL: "imageURL 7",
        alt: "alt 4"
      },
      {
        id: 4,
        imageURL: "imageURL 8",
        alt: "alt 4"
      },
    ]

    const result = shallow(
      <Meals mealItems={mealItems} />
    )

    expect(result).toMatchSnapshot()
  })
})
