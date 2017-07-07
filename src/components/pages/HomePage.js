import React from 'react'

import Cities from '../Cities'
import ContactForm from '../ContactForm'
import Features from '../molecules/Features/Features'
import Hero from '../molecules/Hero/Hero'
import Meals from '../Meals'
import Plans from '../Plans'
import Steps from '../Steps'
import Testimonials from '../Testimonials'

/**
 * Homepage component displays home page
 */
const HomePage = () => (
  <div>
    <Hero />
    <Features />
    <Meals />
    <Steps />
    <Cities />
    <Testimonials />
    <Plans />
    <ContactForm />
  </div>
)

export default HomePage
