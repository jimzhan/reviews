import path from 'path';
import webpack from 'webpack';
import merge from 'webpack-merge';

const PATHS = {
  src: path.join(__dirname, 'src'),
  app: path.join(__dirname, 'src', 'index'),
  build: path.join(__dirname, 'build'),
};

const TASK = process.env.npm_lifecycle_event;

const common = {
  devtool: 'source-map',

  resolve: {
    extensions: ['', '.js', '.jsx'],
  },

  output: {
    path: PATHS.build,
    filename: 'app.js',
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env': { NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'development') },
    }),
  ],
};


//-----------------------
// DEVELOPMENT Settings |
//-----------------------
if (TASK === 'start' || TASK === 'watch' || !TASK) {
  // DEVELOPMENT configurations
  module.exports = merge(common, {
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
      PATHS.app,
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
          test: /\.(jsx?)$/,
          loaders: [
            'react-hot-loader',
            'babel-loader?presets[]=es2015&presets[]=react&presets[]=stage-0',
          ],
          include: PATHS.src,
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

//-----------------------
// PRODUCTION Settings |
//-----------------------
if (TASK === 'build') {
  module.exports = merge(common, {
    entry: [
      PATHS.app,
    ],

    module: {
      loaders: [
        {
          test: /\.html$/,
          loader: 'file?name=[name].[ext]',
        },
        {
          test: /\.css$/,
          exclude: /node_modules/,
          loaders: [
            'style-loader',
            'css-loader?modules&sourceMap&importLoaders=1&'
            + 'localIdentName=[name]__[local]___[hash:base64:5]',
          ],
        },
        {
          test: /\.(jsx?)$/,
          loaders: [
            'babel-loader?presets[]=es2015&presets[]=react&presets[]=stage-0',
          ],
          include: PATHS.src,
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
