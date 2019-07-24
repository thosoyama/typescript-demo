/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path')
const webpack = require('webpack')
const TerserPlugin = require('terser-webpack-plugin')

module.exports = {
  entry: {
    index: './src/assets/scripts/index.ts'
  },
  output: {
    path: path.resolve(__dirname, 'dist/assets/js'),
    filename: '[name].js'
  },
  resolve: {
    extensions: ['.ts']
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
              presets: ['@babel/preset-env']
            }
          },
          {
            loader: 'ts-loader',
            options: {
              transpileOnly: true
            }
          },
          {
            loader: 'eslint-loader'
          }
        ]
      }
    ]
  },
  plugins: [new webpack.optimize.AggressiveMergingPlugin()],
  optimization: {
    minimizer: [
      new TerserPlugin({
        extractComments: /^\**!|copyright|preserve|license|@cc_on/i
      })
    ]
  }
}
