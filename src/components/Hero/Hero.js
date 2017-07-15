// @flow

import React from 'react'
import Button from '../../elements/Button/Button'

import './Hero.scss'
import Wrapper from '../../elements/Wrapper/Wrapper'

/**
 * Hero component displays the hero with image background and 2 buttons
 */
const Hero = () => (
  <section className="hero">
    <Wrapper>
      <div className="panel">
        <div className="hero__background">
          <div className="hero__inner">
            <h1>Goodbye junk food.<br />Hello super healthy meals.</h1>
            <div className="hero__links">
              <Button text="I'm hungry" onClick={() => {}} />
              <Button appearance="secondary" text="Show me more" onClick={() => {}} />
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  </section>
)

export default Hero
