// @flow

import { connect } from 'react-redux'
import Plans from '../components/Plans/Plans'
import type { PlansType } from '../utils/types'

type PlansState = {
  plans: PlansType
}

export const mapStateToProps = (state : PlansState) => ({
  planItems: state.plans.planItems
})

export default connect(
  mapStateToProps
)(Plans)
