import { applyMiddleware, compose, createStore } from 'redux'
import reducers from './reducers'
import promiseMiddleWare from 'redux-promise-middleware'
import createHistory from 'history/createBrowserHistory'
import { routerMiddleware } from 'react-router-redux'

export const history = createHistory()
const composeEnhancers = window[ '__REDUX_DEVTOOLS_EXTENSION_COMPOSE__' ] || compose

const store = createStore(
  reducers,
  composeEnhancers(
    applyMiddleware(
      promiseMiddleWare(),
      routerMiddleware(history)
    )
  )
)

export default store
