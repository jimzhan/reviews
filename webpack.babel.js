import path from 'path';
import webpack from 'webpack';
import merge from 'webpack-merge';
import shared from './webpack.shared';


module.exports = merge(shared, {
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'app.[hash].js',
  },

  entry: [
    path.join(__dirname, 'src', 'index'),
  ],

  module: {
    loaders: [
      {
        test: /\.(jsx?)$/,
        loaders: [
          'babel-loader?presets[]=es2015&presets[]=react&presets[]=stage-0',
        ],
        include: path.join(__dirname, 'src'),
        exclude: /node_modules/,
      },
    ],
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.bundle.js'),
    new webpack.optimize.UglifyJsPlugin({ minimize: true }),
    new webpack.NoErrorsPlugin(),
  ],
});
