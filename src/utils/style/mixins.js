// @flow

import { rem } from 'polished'
import { css } from 'styled-components'
import { base, button, heading } from './branding'
import { mediaQuery } from './settings'
import colors from './colors'

/* media queries */

export const media = {
  smallUp: mediaHelperFactory('smallRange', undefined),
  mediumUp: mediaHelperFactory('mediumRange', undefined),
  largeUp: mediaHelperFactory('largeRange', undefined),
  smallOnly: mediaHelperFactory('smallRange', 'smallRange'),
  mediumOnly: mediaHelperFactory('mediumRange', 'mediumRange'),
  largeOnly: mediaHelperFactory('largeRange', 'largeRange'),
  xLargeOnly: mediaHelperFactory('xLargeRange', 'xLargeRange'),
  mediumDown: mediaHelperFactory(undefined, 'mediumRange'),
  largeDown: mediaHelperFactory(undefined, 'largeRange'),
  xLargeDown: mediaHelperFactory(undefined, 'xLargeRange'),
  factory: mediaHelperFactory,
}

function mediaHelperFactory(lowerBoundName?: string, upperBoundName?: string) {
  const mediaQueryParts = []

  if (lowerBoundName !== undefined) {
    mediaQueryParts.push(`(min-width: ${ rem(mediaQuery[ lowerBoundName ].lowerBound) })`)
  }

  if (upperBoundName !== undefined) {
    mediaQueryParts.push(`(max-width: ${ rem(mediaQuery[ upperBoundName ].upperBound) })`)
  }

  return (strings: string[], ...variables: any) => css`
    @media ${ mediaQueryParts.join(' and ') } {
      ${ css(strings, ...variables) }
    }
  `
}

export const stepScale = (attr: string, smallVal?: any, mediumVal?: any, largeVal?: any) => {
  return css`
    ${media.smallOnly`
      ${attr}: ${smallVal};
    `}
    ${media.mediumUp`
      ${attr}: ${mediumVal};
    `}
    ${media.largeUp`
      ${attr}: ${largeVal};
    `}
  `
}

/* heading */

export const setHeading = () => {
  return css`
    margin-bottom: ${base.unit};
    font-weight: ${heading.weight};
    line-height: ${heading.lineHeight};
    vertical-align: baseline;
  `
}

/**
 * Button factory
 *
 * This object will create a button. Call this by using renderButton.primary to generate a button with primary button
 * styling. Use renderButton.secondary for secondary styled buttons.
 *
 */

export const renderButton = new (function () {
  this.baseButton = `
    display: flex;
    appearance: none;
    position: relative;
    padding: ${ rem('8px') };
    width: 100%;
    justify-content: center;
    align-items: center;
    vertical-align: middle;
    text-decoration: none;
    border-radius: ${ rem('2px') };
    border-width: ${button.border.width};
    font-weight: ${button.fontWeight};
    text-shadow: 0 ${ rem('1px') } 0 rgba(255,255,255,0.69);
  `
  this.primary = css`
    ${this.baseButton};
    background-color: ${ button.backgroundColor.primary} ;
    box-shadow: inset 0 ${ rem('-1px') } 0 0 #D7AC00;
  `
  this.secondary = css`
    ${ this.baseButton };
    background-color: ${ button.backgroundColor.secondary };
    box-shadow: inset 0 ${ rem('-1px') } 0 0 #B9C0CA;
  `
})()

/**
 * Modal factory
 *
 * This object will create a base modal. Call this by using renderModal.baseModalSmallScreen
 * to generate a base modal on small screen
 */
export const renderModal = new (function () {
  this.baseModalSmallScreen = {
    overlayStyleOverrules: {
      backgroundColor: 'rgba(0, 0, 0, 0.6)',
      cursor: 'pointer',
      zIndex: 5,
    },
    bodyStyleOverrules: {
      cursor: 'auto',
      border: 'none',
      borderRadius: 0,
      padding: 0,
      top: `${'10px'}`,
      left: `${'10px'}`,
      right: `${'10px'}`,
      bottom: `${'10px'}`,
    }
  }
})()

/**
 * Item line item style in modal
 */
export const setItemlineItemInModal = () => {
  return css`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    color: ${colors.black};
    padding: 0 ${rem('15px')};
  `
}
