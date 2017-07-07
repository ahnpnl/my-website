import React from 'react'
import HomePage from './pages/HomePage'
import Header from '../containers/Header'
import Footer from './organisms/Footer/Footer'
import Hero from './molecules/Hero/Hero'
import Features from '../containers/Features'

const App = () => (
  <div>
    <Header />
    <Hero />
    <Features />
    <Footer />
  </div>
)

export default App
