import { css } from 'styled-components'
import { base, font, heading } from '../../utils/style/branding'
import { setHeading, stepScale } from "../../utils/style/mixins"
import colors from '../../utils/style/colors'

const typography = () => {
  return css`
    body {
      font-family: ${font.baseFamily};
      font-size: ${font.size};
      font-weight: ${font.weight.normal};
      font-style: normal;
      color: ${font.color};
      line-height: ${font.lineHeight};
    }
    
    h1, h2, h3, h4 {
      ${setHeading()}
    }
    
    h1 {
      ${stepScale('font-size', heading.fontSize.h1.small, heading.fontSize.h1.medium, heading.fontSize.h1.large)};
    }
    
    h2 {
      font-size: ${heading.fontSize.h2};
      font-weight: ${font.weight.normal};
    }
    
    h3 {
      font-size: ${heading.fontSize.h3};
    }
    
    h4 {
      font-size: ${heading.fontSize.h4};
    }
    
    h5 {
      font-size: ${heading.fontSize.h5};
      color: ${colors.regentGray}
    }
    
    p {
      margin-bottom: ${base.unit};
    }
    
    strong {
      font-weight: 600;
    }
    
    em {
      font-style: italic;
    }
    
    pre {
      font-family: ${font.monospaceFont};
      white-space: pre;
    }
    
    small {
      font-size: 75%;
      vertical-align: baseline;
    }
    
  `
}

export default typography
