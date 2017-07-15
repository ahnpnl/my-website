import React from 'react'
import renderer from 'react-test-renderer'
import MediaObjectItem from './MediaObjectItem'

describe('MediaObjectItem component', () => {
  it('displays a media object item with an image', () => {
    const mediaItem = {
      id: 1,
      title: 'Test grid item 2',
      text: 'A grid item with an image',
      imageURL: 'An example image link',
      alt: 'Example image'
    }

    const result = renderer.create(
      <MediaObjectItem mediaItem={mediaItem} className="testmedia" />
    ).toJSON()

    expect(result).toMatchSnapshot()
  })
})
