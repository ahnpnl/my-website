import { combineReducers } from 'redux'
import deviceInfo from './modules/deviceInfo'
import header from './modules/header'

const reducers = combineReducers({
  deviceInfo,
  header,
})

export default reducers
