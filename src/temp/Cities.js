import React from 'react'

const Cities = () => (
  <section className="section-cities" id="cities">
    <div className="row">
      <h2>We're currently in these cities</h2>
    </div>
    <div className="row">
      <div className="col span-1-of-4 box">
        <img src={require(`../assets/img/lisbon-3.jpg`)} alt="Lisbon" />
        <h3>Lisbon</h3>
        <div className="city-feature">
          <i className="ion-ios-person icon-small"></i>
          1600+ happy eaters
        </div>
        <div className="city-feature">
          <i className="ion-ios-star icon-small"></i>
          60+ top chefs
        </div>
        <div className="city-feature">
          <i className="ion-social-twitter icon-small"></i>
          <a href="">@omnifood_lx</a>
        </div>
      </div>
      <div className="col span-1-of-4 box">
        <img src={require(`../assets/img/san-francisco.jpg`)} alt="San Francisco" />
        <h3>San Francisco</h3>
        <div className="city-feature">
          <i className="ion-ios-person icon-small"></i>
          3700+ happy eaters
        </div>
        <div className="city-feature">
          <i className="ion-ios-star icon-small"></i>
          160+ top chefs
        </div>
        <div className="city-feature">
          <i className="ion-social-twitter icon-small"></i>
          <a href="">@omnifood_sf</a>
        </div>
      </div>
      <div className="col span-1-of-4 box">
        <img src={require(`../assets/img/berlin.jpg`)} alt="Berlin" />
        <h3>Berlin</h3>
        <div className="city-feature">
          <i className="ion-ios-person icon-small"></i>
          2300+ happy eaters
        </div>
        <div className="city-feature">
          <i className="ion-ios-star icon-small"></i>
          110+ top chefs
        </div>
        <div className="city-feature">
          <i className="ion-social-twitter icon-small"></i>
          <a href="">@omnifood_berlin</a>
        </div>
      </div>
      <div className="col span-1-of-4 box">
        <img src={require(`../assets/img/london.jpg`)} alt="London" />
        <h3>London</h3>
        <div className="city-feature">
          <i className="ion-ios-person icon-small"></i>
          1200+ happy eaters
        </div>
        <div className="city-feature">
          <i className="ion-ios-star icon-small"></i>
          50+ top chefs
        </div>
        <div className="city-feature">
          <i className="ion-social-twitter icon-small"></i>
          <a href="">@omnifood_london</a>
        </div>
      </div>
    </div>
  </section>
)

export default Cities
