// @flow
import initialState from './citiesMock.json'
import type { Action, CitiesType } from '../utils/types'

export default function reducer(state: CitiesType = initialState, action: Action<any>) {
  switch (action.type) {
    default:
      return state
  }
}
