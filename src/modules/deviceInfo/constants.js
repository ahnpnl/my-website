// @flow

export type DeviceType = {
  title: string,
  isSmall: boolean,
  isMedium: boolean,
  isLarge: boolean,
  isXLarge: boolean,
}

const deviceType = (title: string): DeviceType => ({
  title,
  isSmall: title === 'small',
  isMedium: title === 'medium',
  isLarge: title === 'large',
  isXLarge: title === 'xLarge',
})

export const DEVICE_SMALL = deviceType('small')
export const DEVICE_MEDIUM = deviceType('medium')
export const DEVICE_LARGE = deviceType('large')
export const DEVICE_XLARGE = deviceType('xLarge')

export const ORIENTATION_PORTRAIT = 'portrait'
export const ORIENTATION_LANDSCAPE = 'landscape'
