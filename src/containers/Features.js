// @flow

import { connect } from 'react-redux'
import Features from '../components/Features/Features'
import type { FeaturesType } from '../utils/types'

type FeaturesState = {
  features: FeaturesType
}

export const mapStateToProps = (state : FeaturesState) => ({
  featureItems: state.features.featureItems
})

export default connect(
  mapStateToProps
)(Features)
