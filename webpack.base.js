const webpack = require('webpack');

const dotenv = require('dotenv');

const path = require('path');

const alias = require('./configuration/alias');

const baseConfiguration = () => {
  const ROOT = process.cwd();

  let envPath;

  const processEnvironment = process.env.NODE_ENV;

  switch (processEnvironment) {
    case 'production':
      envPath = `${ROOT}/.env/production.env`;
      break;
    case 'staging':
      envPath = `${ROOT}/.env/staging.env`;
      break;
    case 'testing':
      envPath = `${ROOT}/.env/testing.env`;
      break;
    default:
      envPath = `${ROOT}/.env/development.env`;
  }

  const { parsed: localEnv } = dotenv.config({ path: envPath });

  const envKeys = Object.keys(localEnv).reduce((prev, next) => {
    prev[`process.env.${next}`] = JSON.stringify(localEnv[next]);
    return prev;
  }, {});

  return {
    entry: './index.tsx',
    node: { fs: 'empty' },
    module: {
      rules: [
        {
          test: /\.(js|ts)x?$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript'],
            },
          },
        },
        {
          test: /\.(png|svg|jpg|gif|ttf)$/,
          use: ['file-loader'],
        },
        {
          test: /\.(scss|css)$/,
          use: ['style-loader', 'css-loader', 'sass-loader'],
        },
      ],
    },
    resolve: {
      extensions: ['*', '.js', '.jsx', '.tsx', '.ts'],
      alias,
    },

    output: {
      path: path.resolve(__dirname, 'tbuild'),
      filename: 'bundle.js',
      publicPath: '/footline/',
    },
    plugins: [new webpack.DefinePlugin(envKeys)],
  };
};

module.exports = baseConfiguration;
