import { combineReducers } from 'redux'
import deviceInfo from './modules/deviceInfo'
import features from './modules/features'
import header from './modules/header'
import meals from './modules/meals'
import cities from './modules/cities'

const reducers = combineReducers({
  cities,
  deviceInfo,
  features,
  header,
  meals,
})

export default reducers
