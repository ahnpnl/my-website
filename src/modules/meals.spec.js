import * as MealsModule from './meals'

describe('meals', () => {
  describe('reducer', () => {
    it('returns the current state when called with an unknown action', () => {
      const state = { featureItems: [] }
      expect(MealsModule.default(state, { type: 'UNKNOWN_ACTION' })).toBe(state)
    })

    it('returns an initial state when called without a state', () => {
      expect(MealsModule.default(undefined, { type: 'UNKNOWN_ACTION' })).not.toBe(undefined)
    })
  })
})
