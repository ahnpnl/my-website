// @flow

import React from "react"
import PropTypes from 'prop-types'

import Icon from '../../elements/Icon/Icon'
import type { DeviceInfo } from '../../utils/types'

import './Header.scss'
import Modal from '../Modal/Modal'
import ModalHeader from '../Modal/ModalHeader'

import '../Modal/ModalHeader.scss'

type HeaderArguments = {
  deviceInfo: DeviceInfo,
  isOpen: boolean,
  setOpenState: (isOpen: boolean) => mixed
}

/*
 * Header component displays a logo on the left and navigation bar on the right
 */
const Header = ({ deviceInfo, isOpen, setOpenState }: HeaderArguments) => {
  return (
    <div className="header__wrapper">
      <header>
        <div className="header__top">
          <div className="top__wrapper">
            <div className="header__logo">
              <img src={require('../../assets/img/logo-white.png')} alt="Omnifood logo" className="logo" />
            </div>
            {!deviceInfo.deviceType.isSmall
              ? renderNormalNavigation()
              : renderCompactMenu(isOpen, setOpenState)
            }
          </div>
        </div>
      </header>
    </div>
  )
}

function renderCompactMenu(isOpen: boolean, setOpenState: (isOpen: boolean) => mixed) {
  return (
    <nav className="nav__compactmenu">
      <a href="" className="compactmenu__link" onClick={(event) => {
        event.preventDefault()
        setOpenState(!isOpen)
      }}>
        <Icon name="category" />
      </a>
      <Modal
        isOpen={isOpen}
        contentLabel="CategoryNavigationModal Menu"
        onRequestClose={() => setOpenState(false)}
        displayMode="smallScreen"
      >
        <ModalHeader
          onRequestClose={() => setOpenState(false)}
          closeButtonTitle="Close modal"
        >
          Menu
        </ModalHeader>
        <div className="modal__body">
          <ul>
            <li><a className="nav__link" href="#features">Food delivery</a></li>
            <li><a className="nav__link" href="#works">How it works</a></li>
            <li><a className="nav__link" href="#cities">Our cities</a></li>
            <li><a className="nav__link" href="#plans">Sign up</a></li>
          </ul>
        </div>
      </Modal>
    </nav>
  )
}

function renderNormalNavigation() {
  return (
    <nav className="nav__links">
      <a className="nav__link" href="#features">Food delivery</a>
      <a className="nav__link" href="#works">How it works</a>
      <a className="nav__link" href="#cities">Our cities</a>
      <a className="nav__link" href="#plans">Sign up</a>
    </nav>
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
