// @flow

import React from 'react'
import PropTypes from 'prop-types'

type IconProps = {
  name: string,
}

/**
 * This component inserts an svg icon. The name of the icon should be the same as the name of the svg file for the icon
 * in assets/img/icons/.
 */

const Icon = ({ name }: IconProps) => {
  // We need require since this is a dynamic import :(
  require(`../../../assets/img/icons/${name}.svg`)
  return (
    <svg aria-labelledby={`icon__${name}-title`} role="img" key={name}>
      <title>{name}</title>
      <use pointerEvents="none" xlinkHref={`#icons-${name}`} />
    </svg>
  )
}

Icon.propTypes = {
  /**
   * String indicates icon file name
   */
  name: PropTypes.string.isRequired,
}

export default Icon

