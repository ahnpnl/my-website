// @flow

import React from 'react'
import PropTypes from 'prop-types'

type InfoItemArguments = {
  title: string,
  text: string,
}

/**
 * Info item component displays a block of title and paragraph
 */
const InfoItem = ({ title, text } : InfoItemArguments) => (
  <div className="info">
    <h3>{title}</h3>
    <p>{text}</p>
  </div>
)

InfoItem.propTypes = {
  /**
   * String indicates the title of info block
   */
  title: PropTypes.string.isRequired,

  /**
   * String indicates the paragraph of info block
   */
  text: PropTypes.string.isRequired,
}

export default InfoItem
