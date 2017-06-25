// @flow

import addPx from 'add-px-to-style'
import hyphenate from 'hyphenate-style-name'
import { css } from 'styled-components'

/* calculate column width */
export const calcValue = (fraction: string, gutter: string = '0', rounder: number = 99.9, unit: string = '%') => {
  let gutterLogic = ''

  if (gutter !== '0') {
    gutterLogic = ` - (${gutter} - ${gutter} * ${fraction})`
  }

  let calcValue = `calc((${rounder}${unit} * ${fraction})${gutterLogic})`
  return calcValue
}

/** CREATE CSS BLOCKS
 *
 * This function is used to create (css-ish)style blocks which can be inserted into styled-components. This function is
 * far from complete, but for now will serve our purposes.
 *
 * @param {object} obj     - Object that holds the styling. The key is a css-property, the value is the css-value
 *
 * @param {Array} [addToObj] - Array that contains code to be added inside the obj code block. For now this is only used
 *                           to insert nth-child styling. In the future we could expand this to add even other nested
 *                           styles to the obj.
 *                           Index[0] of addToObj contains the css-selector, the other indices contain the desired
 *                           styles. This option isn't fully functional yet and should be improved in future iterations.
 *
 * @returns {function} css - The function returns the { css } function from styled-components which creates a template
 *                           literal that composes the css. It gets its input from the results of the operations on
 *                           the obj and addToObj attributes.
 */

export const newBlock = (obj: { [key: string]: ?any }, addToObj?: Array<any>) => {
  const keys = Object.keys(obj)

  /* build child node css */
  let childNode
  if (addToObj !== undefined) {
    let selector: string = addToObj[0]
    if (selector.indexOf('&:') !== -1) {
      childNode = `${selector} { 
        margin-left: auto;
        margin-right: 0;
      }`
    }
  }

  /* iterate through the keys that were obtained from the obj attribute. Use these keys and their values to create
   * css properties and their values. */
  let i, len = keys.length
  let result = ''
  for (i = 0 ; i < len ; i++) {
    let key = keys[i]
    let val = obj[key]
    result += hyphenate(key) + ':' + addPx(key, val) + ';'
  }

  /* combine the output of both the obj and the addToObj attributes into one code block so that we can insert them into
   * our styled-components. */
  return css`
    ${result}
    ${childNode}
  `
}
