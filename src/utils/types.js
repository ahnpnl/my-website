// @flow

import type { DeviceType } from '../modules/deviceInfo/constants'

export interface Action<T> {
  type: string,
  payload: T,
  meta?: any,
  error?: ?any,
}

export type Dispatcher = (action: Action<any>) => void

export type DeviceInfo = {
  width: number,
  height: number,
  userAgent: string,
  orientation: string,
  deviceType: DeviceType,
}
