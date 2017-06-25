import { combineReducers } from 'redux';
import deviceInfo from './modules/deviceInfo'

const reducers = combineReducers({
    deviceInfo,
});

export default reducers
