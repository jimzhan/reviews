import path from 'path';


module.exports = {
  devtool: 'source-map',

  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js',
  },

  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
};
