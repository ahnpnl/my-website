// @flow

import React from 'react'
import Features from '../../containers/Features'
import Hero from '../Hero/Hero'
import Meals from '../../containers/Meals'
import Steps from '../Steps/Steps'
import Cities from '../../containers/Cities'
import Page from '../../elements/Page/Page'
import Testimonials from '../../containers/Testimonials'
import Plans from '../../containers/Plans'

/**
 * Homepage component displays home page
 */
const HomePage = () => (
  <Page>
    <Hero />
    <Features />
    <Meals />
    <Steps />
    <Cities />
    <Testimonials />
    <Plans />
  </Page>
)

export default HomePage
