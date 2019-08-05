module.exports = ctx => {
  const prod = !ctx.env || ctx.env === 'production'

  return {
    map: prod ? false : {},
    base: 'src/assets/styles',
    plugins: {
      stylelint: require('./.stylelintrc.js'),
      autoprefixer: {},
      csswring: prod ? {} : false
    }
  }
}
