import React from 'react'
import renderer from 'react-test-renderer'
import GridItem from './GridItem'

describe('GridItem component', () => {
  it('displays a grid item without an image', () => {
    const gridItem = {
      title: 'Test grid item 1',
      text: 'A grid item without an image'
    }

    const result = renderer.create(
      <GridItem gridItem={gridItem} className="span--1--of--4"/>
    ).toJSON()

    expect(result).toMatchSnapshot()
  })

  it('displays a grid item with an image', () => {
    const gridItem = {
      title: 'Test grid item 2',
      text: 'A grid item with an image',
      image: {
        url: 'An example image link',
        alt: 'Example image'
      }
    }

    const result = renderer.create(
      <GridItem gridItem={gridItem} className="span--1--of--4"/>
    ).toJSON()

    expect(result).toMatchSnapshot()
  })
})
