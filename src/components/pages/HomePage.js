// @flow

import React from 'react'

import Cities from '../Cities'
import ContactForm from '../ContactForm'
import Features from '../../containers/Features'
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
  </div>
)

export default HomePage
