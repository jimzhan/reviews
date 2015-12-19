'use strict';
let webpack = require('webpack');
let WebpackDevServer = require('webpack-dev-server');
let debug = require('debug')('server');
let config = require('./webpack.config');


new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true
}).listen(3000, 'localhost', function (err) {
  if (err) {
    debug(err);
  }
  debug('Listening at localhost:3000');
});
