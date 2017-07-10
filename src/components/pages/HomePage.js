// @flow

import React from 'react'
import Features from '../../containers/Features'
import Hero from '../molecules/Hero/Hero'
import Meals from '../../containers/Meals'
import Steps from '../molecules/Steps/Steps'

/**
 * Homepage component displays home page
 */
const HomePage = () => (
  <div>
    <Hero />
    <Features />
    <Meals />
    <Steps />
  </div>
)

export default HomePage
