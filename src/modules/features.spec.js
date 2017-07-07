import * as FeaturesModule from './features'

describe('features', () => {
  describe('reducer', () => {
    it('returns the current state when called with an unknown action', () => {
      const state = { featureItems: [] }
      expect(FeaturesModule.default(state, { type: 'UNKNOWN_ACTION' })).toBe(state)
    })

    it('returns an initial state when called without a state', () => {
      expect(FeaturesModule.default(undefined, { type: 'UNKNOWN_ACTION' })).not.toBe(undefined)
    })
  })
})
