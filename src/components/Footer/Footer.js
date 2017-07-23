// @flow

import React from 'react'
import Icon from '../../elements/Icon/Icon'
import Wrapper from '../../elements/Wrapper/Wrapper'

import './Footer.scss'

/*
 * Footer component displays navigation links on the left, social medial icons on the right
 * and copyright below
 */
const Footer = () => (
  <footer>
    <Wrapper name="footer">
      <div className="footer__main">
        <nav className="footer__row nav">
          <a className="footer__nav__link" href="">About us</a>
          <a className="footer__nav__link" href="">Blog</a>
          <a className="footer__nav__link" href="">Press</a>
          <a className="footer__nav__link" href="">iOS App</a>
          <a className="footer__nav__link" href="">Android App</a>
        </nav>
        <nav className="footer__row socialmedia">
          <a className="footer__nav__link" href=""><Icon name="facebook" /><span>Facebook</span></a>
          <a className="footer__nav__link" href=""><Icon name="twitter" /><span>Twitter</span></a>
          <a className="footer__nav__link" href=""><Icon name="instagram" /><span>Instagram</span></a>
        </nav>
      </div>
      <div className="footer__subfooter">
        Copyright &copy; 2017 by Omnifood. All rights reserved.
      </div>
    </Wrapper>
  </footer>
)

export default Footer
