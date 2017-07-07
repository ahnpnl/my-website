// @flow

import React from 'react'
import CustomPropTypes from '../../../utils/CustomPropTypes'

import GridItem from '../../atoms/GridItem/GridItem'
import type { FeaturesType } from '../../../utils/types'

/**
 * Feature component displays a title, an introduction and 4 feature items
 */
const Features = ({ featureItems } : FeaturesType) => (
  <section className="features">
    <div className="features__intro">
      <h2>Get food fast &mdash; not fast food</h2>
      <p>
        Hello, we're Omnifood, your new premium food delivery service. We know you're always busy. No time for cooking.
        So let us take care of that, we're really good at it, we promise!
      </p>
    </div>

    <div className="features__specs">
      {featureItems.map((featureItem) => <GridItem key={featureItem.id} gridItem={featureItem} className="specs__span--1--of--4" />)}
    </div>
  </section>
)

Features.propTypes = {
  /**
   * Array which contains 4 feature items
   */
  featureItems: CustomPropTypes.array(4).isRequired
}

export default Features
