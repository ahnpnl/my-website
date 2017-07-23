import React from 'react'
import { shallow } from 'enzyme'
import Testimonials from './Testimonials'

describe('Testimonials component', () => {
  it('renders correctly without any issues', () => {
    const testimonialItems = [
      {
        id: 1,
        imageURL: "https://lh6.googleusercontent.com/jD4zPA2b_nZuI-9e7Sh0HHHcRhGcJ8NK8rqWI9Z6OnsEyJC-d8R2rQ",
        customerName: "Alberto Duncan",
        text: "Omnifood is just awesome! I just launched a startup which leaves me with no time for cooking so Omnifood is a life-saver. Now that I got used to it, I couldn't live without my daily meals!"
      }
    ]

    const result = shallow(
      <Testimonials testimonialItems={testimonialItems} />
    )

    expect(result).toMatchSnapshot()
  })
})
