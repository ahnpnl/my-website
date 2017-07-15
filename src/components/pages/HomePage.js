// @flow

import React from 'react'
import Features from '../../containers/Features'
import Hero from '../molecules/Hero/Hero'
import Meals from '../../containers/Meals'
import Steps from '../molecules/Steps/Steps'
import Cities from '../molecules/Cities/Cities'
import Page from '../atoms/Page/Page'

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
