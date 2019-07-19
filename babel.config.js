module.exports = function(api) {
  api.cache(false);

  const presets = [
    [
      '@babel/preset-env',
      {
        loose: true,
        modules: false,
        targets: {
          chrome: 51,
          ios: 10,
          android: 5,
        },
        useBuiltIns: 'usage',
        corejs: 3,
      },
    ],
    '@babel/preset-typescript',
  ];

  const plugins = ['@babel/plugin-proposal-class-properties', '@babel/plugin-proposal-object-rest-spread'];

  return {
    presets,
    plugins,
  };
};
