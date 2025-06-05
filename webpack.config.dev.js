const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    liveReload: true,
    hot: true,
    open: true,
    static: ['./'],
    watchFiles: {
      paths: ['src/**/*', 'js/**/*', 'css/**/*', '*.html'],
      options: {
        usePolling: false,
        interval: 1000,
      },
    },
  },
  watchOptions: {
    ignored: /node_modules/,
    aggregateTimeout: 300,
    poll: false,
  },
});