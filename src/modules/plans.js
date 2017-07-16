// @flow
import initialState from './plansMock.json'
import type { Action, PlansType } from '../utils/types'

export default function reducer(state: PlansType = initialState, action: Action<any>) {
  switch (action.type) {
    default:
      return state
  }
}
