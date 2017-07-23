// @flow

import React from 'react'
import Hero from '../Hero/Hero'
import Page from '../../elements/Page/Page'
import Features from '../../containers/Features'
import Meals from '../../containers/Meals'
import Steps from '../Steps/Steps'
import Cities from '../../containers/Cities'
import Testimonials from '../../containers/Testimonials'
import ContactForm from '../ContactForm/ContactForm'

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
    <ContactForm />
  </Page>
)

export default HomePage
