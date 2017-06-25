// @flow

import { rem } from 'polished'
import colors from './colors'

export const base = {
  backgroundColor: colors.aquaHaze,
  borderColor: colors.athensGray,
  unit: rem('16px'),
  spacer: rem('8px'),
  icon: {
    size: {
      xsmall: rem('8px'),
      small: rem('16px'),
      normal: rem('32px'),
      large: rem('48px'),
      xlarge: rem('64px'),
      footerSocialMedia: rem('25px'),
    },
  },
}

export const palette = {
  primary: colors.redBerry,
}

export const font = {
  size: '13px',
  lineHeight: rem('21px'),
  weight: {
    normal: 400,
    bold: 600,
  },
  color: colors.black,
  selectionColor: colors.white,
  selectionBackgroundColor: colors.malachite,
  baseFamily: "'Open Sans', Helvetica, Arial, sans-serif",
  sansSerifFont: "Helvetica, Arial, sans-serif",
  serifFont: "Georgia, Cambria, 'Times New Roman', Times, serif",
  monospaceFont: "Consolas, 'Liberation Mono', Courier, monospace",
}

export const heading = {
  fontSize: {
    h1: {
      small: rem('25px'),
      medium: rem('31px'),
      large: rem('31px'),
    },
    h2: rem('25px'),
    h3: rem('21px'),
    h4: rem('15px'),
    h5: rem('15px'),
  },
  lineHeight: 1.35,
  weight: font.weight.bold,
  color: font.color,
}

export const button = {
  backgroundColor: {
    primary: colors.supernova,
    secondary: colors.athensGray,
  },
  fontWeight: font.weight.bold,
  border: {
    radius: rem('2px'),
    color: base.borderColor,
    style: 'solid',
    width: 0,
  },
  boxShadow: {

  }
}

export const link = {
  color: palette.primary,
}
