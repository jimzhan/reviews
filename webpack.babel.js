import path from 'path';
import webpack from 'webpack';
import merge from 'webpack-merge';

const port = 3000;

const PATHS = {
  app: path.join(__dirname, 'src', 'index'),
  build: path.join(__dirname, 'build'),
};

const TASK = process.env.npm_lifecycle_event;

const common = {

  devtool: 'eval-source-map',

  resolve: {
    extensions: ['', '.js', '.jsx'],
  },

  output: {
    path: PATHS.build,
    filename: 'app.js',
  },
};


if (TASK === 'start' || !TASK) {
  // DEVELOPMENT configurations
  module.exports = merge(common, {
    devServer: {
      contentBase: '.',
      historyApiFallback: true,
      host: process.env.HOST,
      port: process.env.PORT || 3000,
      hot: true,
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
      PATHS.app,
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

    output: {
      path: PATHS.build,
      filename: 'app.js',
    },

    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoErrorsPlugin(),
    ],
  });
}

if (TASK === 'build') {
  // PRODUCTION configurations
  module.exports = merge(common, {
    entry: [
      PATHS.app,
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

    output: {
      path: PATHS.build,
      filename: 'app.js',
    },

    plugins: [
      new webpack.NoErrorsPlugin(),
    ],
  });
}
