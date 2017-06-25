// @flow

/* Constants */

export const DEVICE_SMALL_UPPER_BOUND = 767
export const DEVICE_MEDIUM_UPPER_BOUND = 1023
export const DEVICE_LARGE_UPPER_BOUND = 1199

/* Media queries */

export const mediaQuery = {
  smallRange: {
    lowerBound: '320px',
    upperBound: DEVICE_SMALL_UPPER_BOUND + 'px',
  },
  mediumRange: {
    lowerBound: '768px',
    upperBound: DEVICE_MEDIUM_UPPER_BOUND + 'px',
  },
  largeRange: {
    lowerBound: '1024px',
    upperBound: DEVICE_LARGE_UPPER_BOUND + 'px',
  },
  xLargeRange: {
    lowerBound: '1200px',
  },
}

/* z-index stack*/

export const zIndex = {
  aboveGround: 1,
  hoverActiveFocus: 2,
  absoluteFloating: 3,
  fixedFloating: 4,
  popupContainer: 5,
  overlay: 15,
  modal: 20,
  blockingLoader: 25,
}
