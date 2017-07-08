import * as HeaderModule from './header'

describe('header', () => {
  describe('reducer', () => {
    const reducer = HeaderModule.default

    it('returns the current state when called with an unknown action', () => {
      const state = { isOpen: {} }
      expect(HeaderModule.default(state, { type: 'UNKNOWN_ACTION' })).toBe(state)
    })

    it('returns an initial state when called without a state', () => {
      expect(HeaderModule.default(undefined, { type: 'UNKNOWN_ACTION' })).not.toBe(undefined)
    })

    it('sets the isOpen state to true when called with an SET_OPEN_STATE action', () => {
      const state = { isOpen: false }
      const action = { type: HeaderModule.SET_OPEN_STATE, payload: true}
      const result = reducer(state, action)

      expect(result.isOpen).toBe(true)
    })

    it('sets the isOpen state to false when called with an SET_OPEN_STATE action', () => {
      const state = { isOpen: true }
      const action = { type: HeaderModule.SET_OPEN_STATE, payload: false}
      const result = reducer(state, action)

      expect(result.isOpen).toBe(false)
    })
  })

  describe('action creators', () => {
    describe('set open state', () => {
      it('returns an SET_OPEN_STATE action when payload has value true', () => {
        const result = HeaderModule.setOpenState(true)

        expect(result).toEqual({
          type: HeaderModule.SET_OPEN_STATE,
          payload: true,
          meta: {},
          error: undefined
        })
      })

      it('returns a SET_OPEN_STATE action when payload has value false', () => {
        const result = HeaderModule.setOpenState(false)

        expect(result).toEqual({
          type: HeaderModule.SET_OPEN_STATE,
          payload: false,
          meta: {},
          error: undefined
        })
      })
    })
  })
})
