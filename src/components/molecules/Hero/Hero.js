// @flow

import React from 'react'
import Button from '../../atoms/Button/Button'

/**
 * Hero component displays the hero with image background and 2 buttons
 */
const Hero = () => (
  <section className="hero">
    <h1>Goodbye junk food.<br />Hello super healthy meals.</h1>
    <div className="hero__links">
      <Button text="I'm hungry" onClick={() => {}} />
      <Button appearance="secondary" text="Show me more" onClick={() => {}} />
    </div>
  </section>
)

export default Hero
