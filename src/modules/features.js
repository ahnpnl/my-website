// @flow
import initialState from './featuresMock.json'
import type { Action, GridItemType } from '../utils/types'

export default function reducer(state: Array<GridItemType> = initialState, action: Action<any>) {
  switch (action.type) {
    default:
      return state
  }
}
