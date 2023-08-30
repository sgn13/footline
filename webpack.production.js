const { merge } = require('webpack-merge');

const base = require('./webpack.base');

const productionConfiguration = merge(base(), {
  mode: 'production',
});

module.exports = productionConfiguration;
