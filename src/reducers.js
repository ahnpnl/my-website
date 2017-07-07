import { combineReducers } from 'redux'
import deviceInfo from './modules/deviceInfo'
import features from './modules/features'
import header from './modules/header'

const reducers = combineReducers({
  deviceInfo,
  features,
  header,
})

export default reducers
