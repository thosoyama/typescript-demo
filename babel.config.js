module.exports = function(api) {
  api.cache(false)

  const presets = [
    [
      '@babel/preset-env',
      {
        modules: false,
        targets: {
          chrome: 51,
          ios: 10,
          android: 5
        },
        useBuiltIns: 'usage',
        corejs: 3
      }
    ]
  ]

  return {
    presets
  }
}
