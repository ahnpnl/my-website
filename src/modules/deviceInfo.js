// @flow

import type { Action, DeviceInfo } from '../utils/types'
import { DEVICE_LARGE_UPPER_BOUND, DEVICE_MEDIUM_UPPER_BOUND, DEVICE_SMALL_UPPER_BOUND } from '../utils/settings'
import * as constants from './deviceInfo/constants'

const _ACTION_PREFIX = 'my-website/deviceInfo'

export const UPDATE = `${_ACTION_PREFIX}/UPDATE`

export default function reducer(state: DeviceInfo = getDeviceInfo(), action: Action<DeviceInfo>): DeviceInfo {
  switch (action.type) {
    case UPDATE:
      return action.payload

    default:
      return state
  }
}

export const triggerUpdate = () => ({
  type: UPDATE,
  payload: getDeviceInfo(),
  meta: {},
  error: undefined,
})

function getDeviceInfo(): DeviceInfo {
  const width: number = window.innerWidth
  const height: number = window.innerHeight

  return {
    width,
    height,
    userAgent: navigator.userAgent,
    orientation: width >= height ? constants.ORIENTATION_LANDSCAPE : constants.ORIENTATION_PORTRAIT,
    deviceType: getDeviceType(width),
  }
}

function getDeviceType(width: number): constants.DeviceType {
  if (width <= DEVICE_SMALL_UPPER_BOUND) return constants.DEVICE_SMALL
  if (width <= DEVICE_MEDIUM_UPPER_BOUND) return constants.DEVICE_MEDIUM
  if (width <= DEVICE_LARGE_UPPER_BOUND) return constants.DEVICE_LARGE
  return constants.DEVICE_XLARGE
}
