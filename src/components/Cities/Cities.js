import React from 'react'
import Icon from '../../elements/Icon/Icon'
import Wrapper from '../../elements/Wrapper/Wrapper'
import Row from '../../elements/Row/Row'

import './Cities.scss'

const Cities = ({ cityItems }) => (
  <Row className="cities">
    <Wrapper name="cities">
      <div className="cities__intro">
        <h2>We're currently in these cities</h2>
      </div>
      <div className="cities__specs">
        {cityItems.map(city =>
          <div key={city.id} className="cities__features">
            <img src={city.cityImageURL} alt={city.name} />
            <h3>{city.name}</h3>
            <div className="city__feature">
              <Icon name="profile" />
              {city.nbrOfEaters}
            </div>
            <div className="city__feature">
              <Icon name="star" />
              {city.nbrOfChefs}
            </div>
            <div className="city__feature">
              <Icon name="twitter" />
              <a href="">{city.twitter}</a>
            </div>
          </div>
        )}
      </div>
    </Wrapper>
  </Row>
)

export default Cities
