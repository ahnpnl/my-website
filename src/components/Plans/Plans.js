import React from 'react'

import Row from '../../elements/Row/Row'
import Wrapper from '../../elements/Wrapper/Wrapper'
import Button from '../../elements/Button/Button'
import Icon from '../../elements/Icon/Icon'

import './Plans.scss'

/**
 * Plan component displays 3 plans
 */
const Plans = ({ planItems }) => (
  <Row className="plans">
    <Wrapper name="plans">
      <div className="plans__intro">
        <h2>Start eating healthy today</h2>
      </div>
      <div className="plans__body">
        {planItems.map(plan =>
          <div className="plans__box" key={plan.id}>
            <div className="box__header">
              <h3>{plan.title}</h3>
              <p className="price">{plan.price}</p>
              <p>{plan.priceDetail}</p>
            </div>
            <div className="box__body">
              {plan.features.map(detail =>
                <div className="box__body__item" key={detail.id}><Icon name="check" />{detail.description}</div>
              )}
            </div>
            <div className="box__footer">
              <Button text="Sign up now" onClick={() => {}} />
            </div>
          </div>
        )}
      </div>
    </Wrapper>
  </Row>
)

export default Plans
