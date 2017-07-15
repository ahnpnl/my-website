import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import App from './components/App'
import store from './store'
import * as DeviceInfoModule from './modules/deviceInfo'

window.___store = store

// global event handlers

store.dispatch(DeviceInfoModule.triggerUpdate())
/** Update the device info on resize */
window.addEventListener('resize', () => {
  store.dispatch(DeviceInfoModule.triggerUpdate())
})

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
