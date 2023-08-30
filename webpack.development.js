const { merge } = require('webpack-merge');

const path = require('path');

const base = require('./webpack.base');

const developmentConfiguration = merge(base(), {
  mode: 'development',
  devServer: {
    static: { directory: path.join(__dirname, 'public') },
    compress: true,
    port: Number(process.env.PORT) || 3000,
    historyApiFallback: true,
  },
});

module.exports = developmentConfiguration;
