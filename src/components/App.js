import React from 'react'

import Footer from './Footer/Footer'
import Header from '../containers/Header'
import HomePage from './pages/HomePage'

import './App.scss'

const App = () => (
  <div className="app__container">
    <Header />
    <HomePage />
    <Footer />
  </div>
)

export default App
