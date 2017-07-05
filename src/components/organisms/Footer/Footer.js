// @flow

import React from 'react'
import Icon from '../../atoms/Icon/Icon'

/*
 * Footer component displays navigation links on the left, social medial icons on the right
 * and copyright below
 */
const Footer = () => (
  <footer>
    <div className="footer__row">
      <div className="footer__row__nav">
        <a className="footer__nav__link" href="">About us</a>
        <a className="footer__nav__link" href="">Blog</a>
        <a className="footer__nav__link" href="">Press</a>
        <a className="footer__nav__link" href="">iOS App</a>
        <a className="footer__nav__link" href="">Android App</a>
      </div>
      <div className="footer__row__nav">
        <a className="footer__nav__link" href=""><Icon name="facebook" /></a>
        <a className="footer__nav__link" href=""><Icon name="twitter" /></a>
        <a className="footer__nav__link" href=""><Icon name="instagram" /></a>
      </div>
    </div>
    <div className="footer__subfooter">
      Copyright &copy; 2017 by Omnifood. All rights reserved.
    </div>
  </footer>
)

export default Footer
