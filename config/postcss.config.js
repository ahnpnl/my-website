module.exports = {
  plugins: [
    require('postcss-flexbugs-fixes'),
    require('autoprefixer'),
    require('lost'),
    require('cssnano')({
      preset: 'default',
    }),
    require('postcss-pxtorem')({ propWhiteList: [] }),
  ]
}
