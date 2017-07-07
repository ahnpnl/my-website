// @flow

import React from 'react'
import PropTypes from 'prop-types'
import type { GridItemType } from '../../../utils/types'

type GridItemArguments = {
  gridItem: GridItemType,
  className: string,
}

/**
 * GridItem component displays a block of content including an image (if provided), a header and a paragraph
 * with custom width of the parent container depending on className
 */
const GridItem = ({ gridItem, className } : GridItemArguments) => {
  let additionClassName = className
  if (gridItem.image !== undefined) {
    additionClassName = additionClassName + '__media'
  }

  return (
    <div className={className}>
      {gridItem.image &&
      <img src={gridItem.image.url} alt={gridItem.image.alt} className={`${additionClassName}__img`} />}
      <div className={`${additionClassName}__body`}>
        <h3>{gridItem.title}</h3>
        <p>{gridItem.text}</p>
      </div>
    </div>
  )
}

GridItem.propTypes = {
  /**
   * Object which contains image/title/text for a grid item
   */
  gridItem: PropTypes.object.isRequired,

  /**
   * String indicates the grid styling for the grid item
   */
  className: PropTypes.string.isRequired,
}

export default GridItem
