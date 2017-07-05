// @flow

import React from 'react'

/**
 * Hero component displays the hero with image background and 2 buttons
 */
const Hero = () => (
  <section className="hero">
    <h1>Goodbye junk food.<br />Hello super healthy meals.</h1>
    <div className="hero__links">
      <a className="btn--primary" href="https://aqueous-crag-46774.herokuapp.com/greeting">I'm hungry</a>
      <a className="btn--secondary" href="">Show me more</a>
    </div>
  </section>
)

export default Hero
