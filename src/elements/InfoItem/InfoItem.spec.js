import React from 'react'
import renderer from 'react-test-renderer'
import InfoItem from './InfoItem'

describe('InfoItem component', () => {
  it('displays a block info with a heading and a paragraph', () => {
    const infoItem = {
      title: 'A test title',
      text: 'This is a test paragraph',
    }

    const result = renderer.create(
      <InfoItem title={infoItem.title} text={infoItem.text} />
    ).toJSON()

    expect(result).toMatchSnapshot()
  })
})
