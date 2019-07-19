/* eslint-disable @typescript-eslint/no-var-requires */
const resolve = require('path').resolve;
const webpack = require('webpack');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  mode: process.env.NODE_ENV || 'development',
  entry: {
    index: './src/scripts/index.ts',
  },
  output: {
    path: resolve(__dirname, 'dist'),
    filename: '[name].js',
  },
  resolve: {
    extensions: ['.ts'],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-typescript'],
            },
          },
          {
            loader: 'eslint-loader',
          },
        ],
      },
    ],
  },
  plugins: [new webpack.optimize.AggressiveMergingPlugin()],
  optimization: {
    minimizer: [
      new TerserPlugin({
        extractComments: /^\**!|copyright|preserve|license|@cc_on/i,
      }),
    ],
  },
};
