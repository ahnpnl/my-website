// @flow

import React from 'react'
import Wrapper from '../../elements/Wrapper/Wrapper'
import Row from '../../elements/Row/Row'
import Button from '../../elements/Button/Button'

import './ContactForm.scss'

/**
 * Contact form component displays a contact form
 */
const ContactForm = () => (
  <Row className="contact">
    <Wrapper name="contact">
      <div className="contact__intro">
        <h2>We're happy to hear from you</h2>
      </div>
      <div className="contact__body">
        <form method="post" action="#" className="contact__form">
          <div className="form__row">
            <label htmlFor="name">Name</label>
            <input type="text" name="name" className="name" placeholder="Your name" required />
          </div>
          <div className="form__row">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" className="email" placeholder="Your email" required />
          </div>
          <div className="form__row">
            <label htmlFor="find-us">How did you find us?</label>
            <select name="find-us" id="find-us">
              <option value="friends">Friends</option>
              <option value="search">Search engine</option>
              <option value="ad">Advertisement</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="form__row">
            <label htmlFor="news">Newsletter?</label>
            <input type="checkbox" name="news" className="news" />Yes, please!
          </div>
          <div className="form__row">
            <label htmlFor="message">Drop us a line</label>
            <textarea name="message" placeholder="Your message" defaultValue="" />
          </div>
          <div className="form__row">
            <Button text="Send it!" onClick={() => {}}/>
          </div>
        </form>
      </div>
    </Wrapper>
  </Row>
)

export default ContactForm
