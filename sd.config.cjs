const path = require('path');
const StyleDictionary = require('style-dictionary');
const { config } = require('@kickstartds/style-dictionary');

module.exports = StyleDictionary.extend(config).extend({
  source: [
    'token/src/dictionary/**/*.json',
    path.join(
      path.dirname(require.resolve('@kickstartds/core/package.json')),
      'source/design-tokens/icons/*.svg'
    ),
  ],
  platforms: {
    css: {
      buildPath: 'token/src/',
    },
    jsx: {
      buildPath: 'token/src/icons/',
    },
  },
});
