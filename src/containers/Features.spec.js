import { mapStateToProps } from './Features'

describe('Features container', () => {
  describe('mapStateToProps', () => {
    it('maps the relevant fields from the state', () => {
      const state = {
        features: {
          featureItems: []
        }
      }
      const props = mapStateToProps(state)
      expect(props.featureItems).toBe(state.features.featureItems)
    })
  })
})
