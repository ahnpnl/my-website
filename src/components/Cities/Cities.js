import React from 'react'
import Icon from '../../elements/Icon/Icon'

const Cities = () => (
  <section className="cities">
    <div className="cities__intro">
      <h2>We're currently in these cities</h2>
    </div>
    <div className="cities__specs">
      <div className="cities__features">
        <img src="https://lh4.googleusercontent.com/PdKlSTipBojRngRyozz25bNcjSXDgpoPEjX0_6GRcZpz58aJMjklJg"
             alt="Lisbon" />
        <h3>Lisbon</h3>
        <div className="city__feature">
          <Icon name="profile" />
          1600+ happy eaters
        </div>
        <div className="city__feature">
          <Icon name="star" />
          60+ top chefs
        </div>
        <div className="city__feature">
          <Icon name="twitter" />
          <a href="">@omnifood_lx</a>
        </div>
      </div>
      <div className="cities__features">
        <img src="https://lh3.googleusercontent.com/lDQGvYX2seloj1UDjLnE1ooiOP-5DjUOIMvRtb3aOShF-nG_OpZWcw"
             alt="San Francisco" />
        <h3>San Francisco</h3>
        <div className="city__feature">
          <Icon name="profile" />
          3700+ happy eaters
        </div>
        <div className="city__feature">
          <Icon name="star" />
          160+ top chefs
        </div>
        <div className="city__feature">
          <Icon name="twitter" />
          <a href="">@omnifood_sf</a>
        </div>
      </div>
      <div className="cities__features">
        <img src="https://lh5.googleusercontent.com/HWe5CSBiGeieGvPoUsxUrcJO2hKeZILpn9CcM0WkcFps7C5Rp7LrTA"
             alt="Berlin" />
        <h3>Berlin</h3>
        <div className="city__feature">
          <Icon name="profile" />
          2300+ happy eaters
        </div>
        <div className="city__feature">
          <Icon name="star" />
          110+ top chefs
        </div>
        <div className="city__feature">
          <Icon name="twitter" />
          <a href="">@omnifood_berlin</a>
        </div>
      </div>
      <div className="cities__features">
        <img src="https://lh4.googleusercontent.com/IzAVIrEBuvthQbp2kFZMCz9c95jr593I650s81GuaWf2MFiGy3utjQ"
             alt="London" />
        <h3>London</h3>
        <div className="city__feature">
          <Icon name="profile" />
          1200+ happy eaters
        </div>
        <div className="city__feature">
          <Icon name="star" />
          50+ top chefs
        </div>
        <div className="city__feature">
          <Icon name="twitter" />
          <a href="">@omnifood_london</a>
        </div>
      </div>
    </div>
  </section>
)

export default Cities
