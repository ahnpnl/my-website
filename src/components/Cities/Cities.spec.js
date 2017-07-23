import React from 'react'
import { shallow } from 'enzyme'
import Cities from './Cities'

describe('Cities component', () => {
  it('renders correctly without any issues', () => {
    const cityItems = [
      {
        id: 1,
        cityImageURL: "https://lh4.googleusercontent.com/PdKlSTipBojRngRyozz25bNcjSXDgpoPEjX0_6GRcZpz58aJMjklJg",
        name: "Lisbon",
        nbrOfEaters: "1600+ happy eaters",
        nbrOfChefs: "60+ top chefs",
        twitter: "@omnifood_lx"
      },
      {
        id: 2,
        cityImageURL: "https://lh3.googleusercontent.com/lDQGvYX2seloj1UDjLnE1ooiOP-5DjUOIMvRtb3aOShF-nG_OpZWcw",
        name: "San Francisco",
        nbrOfEaters: "3700+ happy eaters",
        nbrOfChefs: "160+ top chefs",
        twitter: "@omnifood_sf"
      },
    ]
    const result = shallow(
      <Cities cityItems={cityItems} />
    )

    expect(result).toMatchSnapshot()
  })
})
