import React from "react"
import renderer from 'react-test-renderer'

import Page from "./Page"

describe('The Page', () => {

  it('renders a Page component', () => {
    const result = renderer.create(
      <Page/>
    ).toJSON()
    expect(result).toMatchSnapshot()
  })

})
