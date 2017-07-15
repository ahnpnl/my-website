// @flow

import React from 'react'
import Features from '../../containers/Features'
import Hero from '../Hero/Hero'
import Meals from '../../containers/Meals'
import Steps from '../Steps/Steps'
import Cities from '../Cities/Cities'
import Page from '../elements/Page/Page'

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
  </Page>
)

export default HomePage
