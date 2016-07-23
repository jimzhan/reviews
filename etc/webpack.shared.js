import path from 'path';
import webpack from 'webpack';


const basedir = path.join(__dirname, '..');

const build = path.join(basedir, 'build');


module.exports = {
  devtool: 'source-map',

  resolve: {
    extensions: ['', '.js', '.jsx'],
  },

  output: {
    path: build,
    filename: 'app.js',
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env': { NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'development') },
    }),
  ],
};
