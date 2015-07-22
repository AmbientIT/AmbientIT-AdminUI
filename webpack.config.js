/**
 * Webpack config for development
 */
module.exports = require('./webpack/webpack.make')({
  BUILD: false,
  TEST: false
});
