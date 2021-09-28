import {
  decorate,
  // CSSWebIOAdaptor,
  CSSWebInjectAdaptor
} from '@barelyhuman/stone'

const themeConfig = {
  colors: {
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
  },
  dimensions: {}
}

// const adaptors = {
//   css: CSSWebIOAdaptor({
//     output: "src/styles/stone.css",
//     URL: "http://localhost:5000/css",
//   }),
// };

const adaptors = {
  css: CSSWebInjectAdaptor
}

const createAliasMiddleware = (ctx) => {
  // add custom colors
  const { colors } = ctx
  ctx.alias = {
    default: colors.global.black.lighter(50),
    primary: colors.global.blue9,
    secondary: colors.global.black.lighter(50),
    success: colors.global.green9,
    danger: colors.global.red9,
    disabled: colors.global.white.darker(5)
  }
}

const { colors, alias, dimensions, css } = decorate(
  themeConfig,
  adaptors,
  createAliasMiddleware
)

export { dimensions, colors, alias, css }
