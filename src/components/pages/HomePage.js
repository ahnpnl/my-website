import React from 'react'
import Features from '../Features'
import Meals from '../Meals'
import Steps from '../Steps'
import Cities from '../Cities'
import Testimonials from '../Testimonials'
import Plans from '../Plans'
import ContactForm from '../ContactForm'
import Hero from '../molecules/Hero/Hero'

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
