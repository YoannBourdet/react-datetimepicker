const webpack = require('webpack');

module.exports = {
  entry: './app/index.js',
  output: {
    path: './dist',
    filename: 'DateTimePicker.js'
  },
  module: {
    loaders: [{
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      loaders: ['babel'],
    }]
  }
};
