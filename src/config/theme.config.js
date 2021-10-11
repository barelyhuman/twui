import {
  createCSS,
  createDimensions,
  createColors,
  CSSWebInjectAdaptor
} from '@barelyhuman/stone'

const colors = createColors({
  global: {
    white: '#ECEFF4',
    black: '#2E3440',
    // Grays
    gray9: '#3B4252',

    // Reds
    red9: '#BF616A',

    // blue
    blue9: '#5E81AC',

    // green
    green9: '#A3BE8C',

    // Yellow
    yellow9: '#EBCB8B',

    // Orange
    orange9: '#D08770'
  }
})

const dimensions = createDimensions({})

const alias = {
  default: colors.global.black.lighter(50),
  primary: colors.global.blue9,
  secondary: colors.global.black.lighter(50),
  success: colors.global.green9,
  danger: colors.global.red9,
  disabled: colors.global.white.darker(5)
}

const adaptors = {
  css: CSSWebInjectAdaptor
}

const css = createCSS(
  {
    colors,
    dimensions,
    alias
  },
  adaptors
)

export { dimensions, colors, alias, css }
