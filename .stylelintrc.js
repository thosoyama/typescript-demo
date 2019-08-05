module.exports = {
  plugins: ['stylelint-order'],
  extends: [
    'prettier-stylelint/config',
    'stylelint-config-standard-scss',
    'stylelint-config-property-sort-order-smacss',
  ],
  ignoreFiles: [
    'dist/**',
    '**/node_modules/**',
  ],
  rules: {
  },
};
