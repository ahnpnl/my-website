// @flow

import { connect } from 'react-redux'
import Testimonials from '../components/Testimonials/Testimonials'
import type { TestimonialsType } from '../utils/types'

type TestimonialsState = {
  testimonials: TestimonialsType
}

export const mapStateToProps = (state : TestimonialsState) => ({
  testimonialItems: state.testimonials.testimonialItems
})

export default connect(
  mapStateToProps
)(Testimonials)
