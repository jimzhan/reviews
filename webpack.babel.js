import path from 'path';
import webpack from 'webpack';
import merge from 'webpack-merge';

import shared from './etc/webpack.shared';


const src = path.join(__dirname, 'src');


module.exports = merge(shared, {
  devServer: {
    contentBase: '.',
    historyApiFallback: true,
    host: process.env.HOST,
    port: process.env.PORT || 3000,
    hot: true,
    publicPath: '/static/',
    noInfo: true,
    stats: { colors: true },
    watchOptions: {
      aggregateTimeout: 50,
    },
  },

  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    path.join(src, 'index'),
  ],

  module: {
    loaders: [
      {
        test: /\.html$/,
        loader: 'file?name=[name].[ext]',
      },
      {
        test: /\.css$/,
        include: /node_modules/,
        loaders: [
          'style-loader',
          'css-loader?modules&sourceMap&importLoaders=1&'
          + 'localIdentName=[name]__[local]___[hash:base64:5]',
        ],
      },
      {
        test: /\.scss$/,
        loader: 'style!css!postcss!sass',
      },
      {
        test: /\.(jsx?)$/,
        loaders: [
          'react-hot-loader',
          'babel-loader?presets[]=es2015&presets[]=react&presets[]=stage-0',
        ],
        include: src,
        exclude: /node_modules/,
      },
    ],
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
  ],

  resolve: {
    extensions: ['', '.css', '.js', '.jsx', '.scss'],
    alias: {
      primer_support: path.join(__dirname, 'node_modules', 'primer-support', 'index.scss'),
      primer_buttons: path.join(__dirname, 'node_modules', 'primer-buttons', 'index.scss'),
    },
  },
});
