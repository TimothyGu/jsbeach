const ExtractTextPlugin = require('extract-text-webpack-plugin');
const { resolve } = require('path');

const extractCSS = new ExtractTextPlugin('[name].css');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: '[name].js',
    path: resolve(__dirname, 'out')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                [ 'env', {
                    targets: {
                      node: 'current',
                      browsers: '> 5%'
                    },
                    modules: false
                } ],
                'stage-3',
                'react'
              ]
            }
          }
        ]
      },
      {
        test: /\.css$/,
        use: extractCSS.extract({
          use: 'css-loader'
        })
      }
    ],
  },
  plugins: [
    extractCSS
  ],
  devtool: 'cheap-source-map'
};
