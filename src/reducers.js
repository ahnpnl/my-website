import { combineReducers } from 'redux'
import deviceInfo from './modules/deviceInfo'
import features from './modules/features'
import header from './modules/header'
import meals from './modules/meals'

const reducers = combineReducers({
  deviceInfo,
  features,
  header,
  meals,
})

export default reducers
