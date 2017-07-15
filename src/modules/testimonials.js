// @flow
import initialState from './testimonialsMock.json'
import type { Action, TestimonialsType } from '../utils/types'

export default function reducer(state: TestimonialsType = initialState, action: Action<any>) {
  switch (action.type) {
    default:
      return state
  }
}
