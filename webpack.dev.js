const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const shared = require('./webpack.shared');

const port = 3000;


module.exports = merge(shared, {
  devServer: {
    contentBase: '.',
    historyApiFallback: true,
    host: '0.0.0.0',
    hot: true,
    port,
    publicPath: '/static',
    noInfo: true,
    stats: { colors: true },
    watchOptions: {
      aggregateTimeout: 50,
    },
  },

  entry: [
    `webpack-dev-server/client?http://localhost:${port}`,
    'webpack/hot/only-dev-server',
    path.join(__dirname, 'src', 'index'),
  ],

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
  ],
});
