// @flow

import React from "react"
import PropTypes from 'prop-types'
import Icon from '../../atoms/Icon/Icon'
import type { DeviceInfo } from '../../../utils/types'

type HeaderArguments = {
  deviceInfo: DeviceInfo,
  isOpen: boolean,
  setOpenState: (isOpen: boolean) => mixed
}

/*
 * Header component displays a logo on the left and navigation bar on the right
 */
const Header = ({ deviceInfo, isOpen, setOpenState } : HeaderArguments) => {
  return (
    <header>
      <nav>
        <div className="logo">
          <img src={require('../../../assets/img/logo-white.png')} alt="Omnifood logo" className="logo" />
        </div>
        {deviceInfo.deviceType.isSmall
          ? renderCompactMenu(isOpen, setOpenState)
          : renderNormalNavigation()}
      </nav>
    </header>
  )
}

function renderCompactMenu(isOpen: boolean, setOpenState: (isOpen: boolean) => mixed) {
  return (
    <div className="main__nav__compactmenu">
      <a href="" className="compactmenu__link" onClick={(event) => {
        event.preventDefault()
        setOpenState(!isOpen)
      }}>
        <Icon name="category" />
      </a>
    </div>
  )
}

function renderNormalNavigation() {
  return (
    <ul className="main-nav">
      <li className="nav__item"><a className="main-nav__link" href="#features">Food delivery</a></li>
      <li className="nav__item"><a className="main-nav__link" href="#works">How it works</a></li>
      <li className="nav__item"><a className="main-nav__link" href="#cities">Our cities</a></li>
      <li className="nav__item"><a className="main-nav__link" href="#plans">Sign up</a></li>
    </ul>
  )
}

Header.propTypes = {
  /**
   * Info about the device used here to determine screen size
   */
  deviceInfo: PropTypes.object.isRequired,

  /**
   * Boolean indicates the open state of the navigation menu on small screen
   */
  isOpen: PropTypes.bool.isRequired,

  /**
   * Function which triggers open or close navigation menu on small screen
   */
  setOpenState: PropTypes.func.isRequired
}

export default Header
