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

const { colors: _colors } = decorate(themeConfig, adaptors)

// add custom colors
themeConfig.colors.alias = {}
themeConfig.colors.alias.default = _colors.global.black.lighter(50).value()
themeConfig.colors.alias.primary = _colors.global.blue9.value()
themeConfig.colors.alias.secondary = _colors.global.black.lighter(50).value()
themeConfig.colors.alias.success = _colors.global.green9.value()
themeConfig.colors.alias.danger = _colors.global.red9.value()
themeConfig.colors.alias.disabled = _colors.global.white.darker(5).value()

const { dimensions, colors, css } = decorate(themeConfig, adaptors)

export { dimensions, colors, css }
