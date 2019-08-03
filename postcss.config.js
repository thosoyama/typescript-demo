module.exports = ctx => {
  const prod = !ctx.env || ctx.env === 'production'

  return {
    map: prod ? false : {},
    base: 'src/assets/styles',
    plugins: {
      stylelint: {
        extends: 'stylelint-config-standard',
        rules: {}
      },
      precss: {},
      autoprefixer: {},
      csswring: prod ? {} : false
    }
  }
}
