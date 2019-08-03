module.exports = {
  plugins: ['stylelint-order', 'stylelint-scss'],
  extends: [
    'prettier-stylelint/config',
    'stylelint-config-standard',
    'stylelint-config-recess-order'
  ],
  ignoreFiles: [
    'dist/**',
    '**/node_modules/**',
  ],
  rules: {
    'at-rule-no-unknown': null,
    'scss/at-rule-no-unknown': null,
  },
};
