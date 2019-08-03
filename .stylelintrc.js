module.exports = {
  plugins: ['stylelint-order', 'stylelint-scss'],
  extends: [
    'prettier-stylelint/config',
    'stylelint-config-standard',
    'stylelint-config-recess-order'
  ],
  ignoreFiles: [
    '**/node_modules/**',
  ],
  rules: {
  },
};
