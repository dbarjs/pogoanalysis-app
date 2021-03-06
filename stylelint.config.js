module.exports = {
  // add your custom config here
  // https://stylelint.io/user-guide/configuration
  extends: ['stylelint-config-recommended'],
  rules: {
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['tailwind', 'apply', 'variants', 'responsive', 'screen']
      }
    ],
    'declaration-block-trailing-semicolon': null,
    'no-descending-specificity': null,
    'no-empty-source': null
  }
}
