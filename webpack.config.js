'use strict';
let path = require('path');
let webpack = require('webpack');


module.exports = {
  devtool: 'eval',

  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    './src/bootstrap.jsx'
  ],

  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js',
    publicPath: '/static'
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],

  module: {
    loaders: [
      {
        test: /.scss$/,
        loaders: ['style', 'css', 'scss', 'autoprefixer']
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ['react-hot', 'babel']
      },
      {
        test: /\.(png|jpg)$/,
        loader: 'url?limit=8192'
      }
    ]
  }
};
