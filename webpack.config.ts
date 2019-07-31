import * as path from 'path'
import * as webpack from 'webpack'
import * as TerserPlugin from 'terser-webpack-plugin'
import * as HardSourceWebpackPlugin from 'hard-source-webpack-plugin'
import * as ForkTSCchekerWebpackPlugin from 'fork-ts-checker-webpack-plugin'

import { config } from './src/config'

module.exports = {
  entry: {
    index: path.resolve(__dirname, 'src/assets/scripts/index.ts')
  },
  output: {
    path: path.resolve(__dirname, 'dist/assets/scripts'),
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
            loader: 'babel-loader?cacheDirectory',
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
  plugins: [
    new ForkTSCchekerWebpackPlugin(),
    new HardSourceWebpackPlugin(),
    new webpack.optimize.AggressiveMergingPlugin(),
    new webpack.DefinePlugin({
      'process.env.config': JSON.stringify(config),
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    })
  ],
  optimization: {
    minimizer: [
      new TerserPlugin({
        extractComments: /^\**!|copyright|preserve|license|@cc_on/i
      })
    ]
  }
}
