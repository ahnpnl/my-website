// @flow

import PropTypes from 'prop-types'
import React from 'react'

type IconProps = {
  name: string,
  className?: string,
  fixedSize?: string,
}

/**
 * This component inserts an svg icon. The name of the icon should be the same as the name of the svg file for the icon
 * in assets/img/icons/.
 */

const Icon = ({ name, className, fixedSize }: IconProps) => {
  // We need require since this is a dynamic import :(
  require(`../../../assets/img/icons/${name}.svg`)
  return (
    <svg aria-labelledby={`icon-${name}-title`} className={className} role="img" key={name}>
      <title>{name}</title>
      <use pointerEvents="none" xlinkHref={`#icons-${name}`} />
    </svg>
  )
}

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
  fixedSize: PropTypes.string,
}

export default Icon
