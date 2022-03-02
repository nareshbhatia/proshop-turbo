const withTM = require('next-transpile-modules')([
  'number-utils',
  'proshop-models',
  'ui',
]);

module.exports = withTM({
  reactStrictMode: true,
});
