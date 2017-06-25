// @flow

import { css } from 'styled-components'
import { calcValue, newBlock } from './grid-helpers'

// TODO Create fallback for IE9 & 10 in this script

export const settings = {
  gutter: '32px',
  flexbox: 'no-flex',
  cycle: 'auto',
  clearing: 'both',
  rounder: 99.9,
  unit: '%',
  direction: 'ltr',
}

// TODO: Maybe these types should be moved to a separate file, containing all Flex or maybe even all CSS related types.
type FlexDirection = 'row' | 'row-reverse' | 'column' | 'column-reverse'
type FlexWrap = 'nowrap' | 'wrap' | 'wrap-reverse'

/* Grid Wrapper */
export const gridWrapper = (direction: FlexDirection = 'row', wrap: FlexWrap = 'wrap', padding: ?string = null) => {
  const flexFlow = direction + ' ' + wrap
  if (!padding) {
    return css`
      display: flex;
      flex-flow: ${flexFlow};
    `
  } else {
    return css`
      display: flex;
      flex-flow: ${flexFlow};
      padding-left: ${settings.gutter};
      padding-right: ${settings.gutter};
    `
  }
}


/** GRID COLUMN
 *
 * @param {string} decl           - The function accepts a string of attributes that it uses to set a uniform grid. It
 *                                  accepts the following parameters:
 *                                - fraction (e.g. 1/3 to give each column a width that is a third of the parent minus
 *                                  gutters. The function makes sure that if the number of items in the grid is bigger
 *                                  than the denominator (the last number in the fraction), the last item in the row
 *                                  has no margin to the right.
 *                                - [gutter] A pixel value can be used if the gutter for the pixel should be different
 *                                  from the default value in settings.gutter.
 *                                - [flex/no-flex] If the display property of the column item needs to be different from
 *                                  the default display value in settings.flexbox. If no-flex is chosen the item will
 *                                  be a block-level item.
 *
 * @returns {Function} newBlock   - A function that puts all the necessary styles inside the newBlock function and
 *                                  makes sure that the returned css gets inserted into the styled components.
 */

export const gridColumn = (decl: string) => {
  let declArray = decl.split(' ')
  let gridColumn = declArray[0]
  let columnCycle: string
  let columnGutter = settings.gutter
  let columnFlexbox = settings.flexbox
  let columnRounder = settings.rounder
  let unit = settings.unit
  let declaration = {}

  /* Determin if we can use the default cycle setting or if we should */
  if (settings.cycle === 'auto') {
    columnCycle = gridColumn.split('/')[1]
  } else {
    columnCycle = settings.cycle
  }

  if (declArray[1] === 'flex' || declArray[1] === 'no-flex' || declArray[1] === 'auto') {
    columnCycle = declArray[0].split('/')[1]
  }

  if (declArray[1] !== undefined && declArray[1].search(/px/) !== -1) {
    columnGutter = declArray[1]
  }

  if (declArray[2] !== undefined && declArray[2].search(/px/) !== -1) {
    columnGutter = declArray[2]
  }

  if (declArray.includes('flex')) {
    columnFlexbox = 'flex'
  }

  if (declArray.includes('no-flex')) {
    columnFlexbox = 'no-flex'
  }

  /* build generic styles */
  declaration['margin-left'] = '0'
  declaration['margin-right'] = columnGutter
  declaration['margin-bottom'] = columnGutter
  declaration['flex-grow'] = '0'
  declaration['flex-shrink'] = '0'
  declaration['flex-basis'] = calcValue(gridColumn, columnGutter, columnRounder, unit)
  /* flex columns */
  if (columnFlexbox === 'flex') {
    declaration['display'] = 'flex'
    if (columnCycle !== 0) {
      return newBlock(
        declaration, [
          `&:nth-child(${columnCycle}n)`,
          ['margin-right', 'margin-left'],
          ['0', 'auto']]
      )
    } else {
      return newBlock(declaration)
    }
    /* block columns*/
  } else {
    if (columnCycle !== 0) {
      return newBlock(
        declaration, [
          `&:nth-child(${columnCycle}n)`,
          ['margin-right', 'margin-left'],
          ['0', 'auto']]
      )
    } else {
      return newBlock(declaration)
    }
  }
}
