module.exports = function(api) {
  api.cache(true)

  const plugins = [
    [
      '@babel/plugin-transform-runtime',
      {
        corejs: { version: 3, proposals: true }
      }
    ]
  ]

  return {
    plugins
  }
}
