'use strict';
let path = require('path');
let webpack = require('webpack');


module.exports = {  

  entry: [
    'webpack-dev-server/client?http://localhost:8000',
    'webpack/hot/only-dev-server',
    './src/index.ts'
  ],

  devServer: {
    info: false,
    hot: true,
    inline: false,
    port: 8000,
    host: 'localhost',
    colors: true,
    progress: true,
    contentBase: '.',
    historyApiFallback: true,
    stats: {
      colors: true,
      progress: true
    }
  },

  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js',
    publicPath: '/static'
  },

  resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.ts', '.js']
  },

  module: {
    loaders: [
      { test: /\.ts$/, loader: 'ts-loader' }
    ]
  }
}
