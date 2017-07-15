// @flow

import React from 'react'

import type { MealsType } from '../../utils/types'
import CustomPropTypes from '../../utils/CustomPropTypes'

/**
 * Meals component displays images of food
 */
const Meals = ({ mealItems }: MealsType) => (
  <section className="meals">
    {mealItems.map((meal) =>
      <figure key={meal.id} className="meal__photo">
        <img src={meal.imageURL} alt={meal.alt} />
      </figure>)}
  </section>
)

Meals.propTypes = {
  /**
   * Array contains 8 pictures of food
   */
  mealItems: CustomPropTypes.array(8).isRequired
}

export default Meals
