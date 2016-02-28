'use strict';
let port = 3000;
let path = require('path');
let webpack = require('webpack');

module.exports = {
  devtool: 'eval-source-map',

  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    './src/index'
  ],

  devServer: {
    info: false,
    hot: true,
    inline: false,
    port: port,
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
    extensions: ['', '.js', '.ts', '.tsx']
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],

  module: {
    loaders: [
      {
        test: /\.tsx?$/,
        include: path.join(__dirname, 'src'),
        loaders: ['ts-loader']
      }
    ]
  }
};
