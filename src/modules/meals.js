// @flow
import initialState from './mealsMock.json'
import type { Action, MealsType } from '../utils/types'

export default function reducer(state: MealsType = initialState, action: Action<any>) {
  switch (action.type) {
    default:
      return state
  }
}
