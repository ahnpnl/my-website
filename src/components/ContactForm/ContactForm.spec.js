import React from 'react'
import { shallow } from 'enzyme'
import ContactForm from './ContactForm'

describe('ContactForm component', () => {
  it('renders correctly without any issues', () => {
    const result = shallow(
      <ContactForm />
    )

    expect(result).toMatchSnapshot()
  })
})
