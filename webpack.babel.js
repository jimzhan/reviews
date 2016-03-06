import path from 'path';
import webpack from 'webpack';

const port = 3000;


module.exports = {
  devtool: 'cheap-module-source-map',

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

  output: {
    path: path.join(__dirname, 'build'),
    filename: 'app.js',
  },

  resolve: {
    extensions: ['', '.js', '.jsx'],
  },

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
    new webpack.NoErrorsPlugin(),
  ],
};
