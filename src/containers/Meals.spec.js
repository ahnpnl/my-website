import { mapStateToProps } from './Meals'

describe('Meals container', () => {
  describe('mapStateToProps', () => {
    it('maps the relevant fields from the state', () => {
      const state = {
        meals: {
          mealItems: []
        }
      }
      const props = mapStateToProps(state)
      expect(props.mealItems).toBe(state.meals.mealItems)
    })
  })
})
