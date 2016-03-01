const path = require('path');


module.exports = {
  devtool: 'eval',

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
};
