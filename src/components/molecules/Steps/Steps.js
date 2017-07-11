// @flow

import React from 'react'
import Icon from '../../atoms/Icon/Icon'

/**
 * Steps component displays an image, some text blocks and 2 icons
 * @constructor
 */
const Steps = () => (
  <section className="steps">
    <div className="steps__intro">
      <h2>How it works &mdash; Simple as 1, 2, 3</h2>
    </div>
    <div className="steps__description">
      <div className="steps__image">
        <img src="https://lh6.googleusercontent.com/CZHrY4sPHrtka5iLVGyQYDMK3JSUYakzUDUv4EC6GEpYqeBZMaygcg" alt="Omnifood app on iPhone" />
      </div>
      <div className="steps__items">
        <div className="steps__item">
          <div>1</div>
          <p>Choose the subscription plan that best fits your needs and sign up today.</p>
        </div>
        <div className="steps__item">
          <div>2</div>
          <p>Order your delicious meal using our mobile app or website. Or you can even call us!</p>
        </div>
        <div className="steps__item">
          <div>3</div>
          <p>Enjoy your meal after less than 20 minutes. See you the next time!</p>
        </div>
        <div className="steps__item">
          <a href="" className="steps__item__link">
            <Icon name="app-store-badge" />
          </a>
          <a href="" className="steps__item__link">
            <Icon name="google-play-badge" />
          </a>
        </div>
      </div>
    </div>
  </section>
)

export default Steps
