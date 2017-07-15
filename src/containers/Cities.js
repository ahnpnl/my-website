// @flow

import { connect } from 'react-redux'
import Cities from '../components/Cities/Cities'
import type { CitiesType } from '../utils/types'

type CitiesState = {
  cities: CitiesType
}

export const mapStateToProps = (state : CitiesState) => ({
  cityItems: state.cities.cityItems
})

export default connect(
  mapStateToProps
)(Cities)
