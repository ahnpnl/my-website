import React from 'react'

import Wrapper from '../../elements/Wrapper/Wrapper'
import Row from '../../elements/Row/Row'

import './Testimonials.scss'

/**
 * Testimonials component displays 3 testimonials
 */
const Testimonials = ({ testimonialItems }) => (
  <Row className="testimonials">
    <Wrapper name="testimonials">
      <div className="testimonials__background">
        <div className="testimonials__intro">
          <h2>Our customers can't live without us</h2>
        </div>
        <div className="testimonials__body">
          {testimonialItems.map(testimonial =>
            <div className="testimonial__quote" key={testimonial.id}>
              <blockquote>
                {testimonial.text}
                <cite><img src={testimonial.imageURL} alt={testimonial.customerName} />{testimonial.customerName}</cite>
              </blockquote>
            </div>
          )}
        </div>
      </div>
    </Wrapper>
  </Row>
)

export default Testimonials
