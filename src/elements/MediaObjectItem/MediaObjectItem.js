// @flow

import React from 'react'
import PropTypes from 'prop-types'
import type { MediaObjectItemType } from '../../../utils/types'

type MediaObjectItemArguments = {
  mediaItem: MediaObjectItemType,
  className: string,
}

/**
 * MediaObjectItem component displays a block of content including an image, a header and a paragraph
 * with custom width of the parent container depending on className
 */
const MediaObjectItem = ({ mediaItem, className } : MediaObjectItemArguments) => {
  return (
    <div className={className}>
      <img src={mediaItem.imageURL} alt={mediaItem.alt} className={`${className}__media__img`} />
      <div className={`${className}__media__body`}>
        <h3>{mediaItem.title}</h3>
        <p>{mediaItem.text}</p>
      </div>
    </div>
  )
}

MediaObjectItem.propTypes = {
  /**
   * Object which contains image/title/text for a media object item
   */
  mediaItem: PropTypes.object.isRequired,

  /**
   * String indicates the grid styling for the media object item
   */
  className: PropTypes.string.isRequired,
}

export default MediaObjectItem
