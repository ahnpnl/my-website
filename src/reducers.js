import { combineReducers } from 'redux'
import deviceInfo from './modules/deviceInfo'
import features from './modules/features'
import header from './modules/header'
import meals from './modules/meals'
import cities from './modules/cities'
import testimonials from './modules/testimonials'
import plans from './modules/plans'
import { routerReducer } from 'react-router-redux'

const reducers = combineReducers({
  cities,
  deviceInfo,
  features,
  header,
  meals,
  plans,
  router: routerReducer,
  testimonials,
})

export default reducers
