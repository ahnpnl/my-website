// @flow

import { connect } from 'react-redux'
import Meals from '../components/Meals/Meals'
import type { MealsType } from '../utils/types'

type MealsState = {
  meals: MealsType
}

export const mapStateToProps = (state : MealsState) => ({
  mealItems: state.meals.mealItems
})

export default connect(
  mapStateToProps
)(Meals)
