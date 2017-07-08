// @flow

import React from 'react'

import Cities from '../Cities'
import ContactForm from '../ContactForm'
import Features from '../../containers/Features'
import Hero from '../molecules/Hero/Hero'
import Meals from '../../containers/Meals'
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
  </div>
)

export default HomePage
