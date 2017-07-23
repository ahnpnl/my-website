import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import App from './components/App'
import store, { history } from './store'
import * as DeviceInfoModule from './modules/deviceInfo'
import { ConnectedRouter } from 'react-router-redux'

window.___store = store

// global event handlers

store.dispatch(DeviceInfoModule.triggerUpdate())
/** Update the device info on resize */
window.addEventListener('resize', () => {
  store.dispatch(DeviceInfoModule.triggerUpdate())
})

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
)
