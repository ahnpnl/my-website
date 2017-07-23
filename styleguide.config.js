'use strict'

const path = require('path')


module.exports = {
  webpackConfig: Object.assign({},
    require('./config/webpack.config.dev')
  ),
  compilerConfig: {
    transforms: {
      // The compiler used by the style guide cannot handle tagged template strings.
      // Since all relevant browsers these days have implemented tagged template strings, we disable this option.
      templateString: false,
    },
  },
  components: 'src/components/**/*.js'
}
