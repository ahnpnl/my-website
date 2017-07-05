// @flow

import { css } from 'styled-components'
import typography from './typography'
import { base } from '../../utils/style/branding'

export const globalStyles = () => {
  return css`
    @font-face {
      font-family: 'Open Sans', sans-serif;
      src: url('https://fonts.googleapis.com/css?family=Open+Sans:400,600');
    }
    
    html {
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      text-rendering: optimizeLegibility;
      font-size: 100%;
      -ms-text-size-adjust: 100%;
      -webkit-text-size-adjust: 100%
    }
    
    body {
      background-color: ${base.backgroundColor};
    }
    
    /* set the svg path properties to inherit if you want to be able to style them through the <use> element */
    [id^=icons] path, [id^=sprites] path {
      fill: inherit;
    }
     
    ${typography()}
    
    a[href] {
      text-decoration: none;
    }
    
    a[href]:hover,
    a[href]:active,
    a[href]:focus {
      text-decoration: none;
    }
  `
}
