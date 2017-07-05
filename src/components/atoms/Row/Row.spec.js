import React from "react"
import renderer from 'react-test-renderer'

import Row from "./Row"

describe('The Row', () => {

  it('renders a Row component', () => {
    const result = renderer.create(
      <Row/>
    ).toJSON()
    expect(result).toMatchSnapshot()
  })

})
