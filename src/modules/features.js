// @flow
import initialState from './featuresMock.json'
import type { Action, FeaturesType } from '../utils/types'

export default function reducer(state: FeaturesType = initialState, action: Action<any>) {
  switch (action.type) {
    default:
      return state
  }
}
