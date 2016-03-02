import path from 'path';
import webpack from 'webpack';
import merge from 'webpack-merge';
import shared from './webpack.shared';


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

  module: {
    loaders: [
      {
        test: /\.(jsx?)$/,
        loaders: [
          'react-hot-loader',
          'babel-loader?presets[]=es2015&presets[]=react&presets[]=stage-0',
        ],
        include: path.join(__dirname, 'src'),
        exclude: /node_modules/,
      },
    ],
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
  ],
});
