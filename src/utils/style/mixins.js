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
    justify-content: center;
    align-items: center;
    text-align: center;
    vertical-align: middle;
    padding: ${ button.padding.vertical } ${ button.padding.horizontal };
    color: currentColor;
    border: 0;
    border-radius: ${ button.borderRadius };
    font-family: 'Open Sans', helvetica, arial, sans-serif;
    font-size: ${ font.size };
    font-weight: ${ button.fontWeight };
    line-height: ${ base.icon.size.small };
    text-shadow: 0 ${ rem('1px') } 0 rgba(255,255,255,0.69);
    text-decoration: none;
    text-overflow: ellipsis;
    overflow: hidden;
    cursor: pointer;
  `
  this.primary = css`
    ${ this.baseButton };
    color: ${ font.color };
    background-color: ${ button.backgroundColor.primary };
    box-shadow: inset 0 ${ rem('-1px') } 0 0 ${ button.borderColor.primary };
    
    &:hover {
      background-color: ${ button.hoverBackgroundColor.primary };
      text-decoration: none;
      box-shadow: inset 0 ${ rem('2px') } ${ rem('3px') } 0 rgba(0,0,0,0.13),
                  inset 0 ${ rem('-1px') } 0 0 ${ button.borderColor.primary };
    }
  `
  this.secondary = css`
    ${this.baseButton};
    color: ${ font.color };
    background-color: ${ button.backgroundColor.secondary };
    box-shadow: inset 0 ${ rem('-1px')} 0 0 ${ button.borderColor.secondary };
    
    &:hover {
      background-color: ${ button.hoverBackgroundColor.secondary };
      box-shadow: inset 0 ${ rem('2px') } ${ rem('3px') } 0 rgba(0,0,0,0.13),
                  inset 0 ${ rem('-1px') } 0 0 ${ button.borderColor.secondary };
    }
  `
  this.success = css`
    ${ this.baseButton };
    color: ${ colors.white };
    text-shadow: none;
    background-color: ${ button.backgroundColor.success };
    box-shadow: inset 0 ${ rem('-1px') } 0 0 ${ button.borderColor.success };
    
    &:hover {
      box-shadow: inset 0 ${ rem('2px') } ${ rem('3px') } 0 rgba(0,0,0,0.13),
                  inset 0 ${ rem('-1px') } 0 0 ${ button.borderColor.success };
    }
  `
  this.error = css`
    ${ this.baseButton };
    color: ${ colors.white };
    text-shadow: none;
    background-color: ${ button.backgroundColor.error };
    box-shadow: inset 0 ${ rem('-1px') } 0 0 ${ button.borderColor.error };
    
    &:hover {
      box-shadow: inset 0 ${ rem('2px') } ${ rem('3px') } 0 rgba(0,0,0,0.13),
                  inset 0 ${ rem('-1px') } 0 0 ${ button.borderColor.error };
    }
  `
  this.close = css`
    ${ this.baseButton };
    background: transparent;
    color: ${ colors.black };
    box-shadow: none;
  
    &:hover {
      background: transparent;
      box-shadow: none;
    }
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
