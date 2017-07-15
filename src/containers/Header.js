import { connect } from 'react-redux'
import Header from '../components/Header/Header'
import { setOpenState } from '../modules/header'
import type { DeviceInfo, Dispatcher } from '../utils/types'

type HeaderType = {
  deviceInfo: DeviceInfo,
  isOpen: boolean
}

export const mapStateToProps = (state : HeaderType) => ({
  deviceInfo: state.deviceInfo,
  isOpen: state.header.isOpen
})

export const mapDispatchToProps = (dispatch : Dispatcher) => ({
  setOpenState: (isOpen) => {
    dispatch(setOpenState(isOpen))
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Header)
