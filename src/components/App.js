import React from 'react'

import './App.scss'
import Header from '../containers/Header'
import Footer from './Footer/Footer'
import HomePage from './pages/HomePage'
import { Route } from 'react-router-dom'
import HouseDetailPage from './pages/HouseDetailPage'

const App = () => (
  <div className="app__container">
    <Header />
    <Route exact path="/" component={ HomePage } />
    <Route exact path="/buy" component={ HouseDetailPage } />
    <Footer />
  </div>
)

export default App
