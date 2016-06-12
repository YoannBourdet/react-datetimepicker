/* eslint quote-props: 0 */
import path from 'path';

module.exports = {
  context: __dirname,
  entry: {
    'example/js/bundle/DateTimePicker': './example/js/app.js',
  },
  output: {
    path: __dirname,
    filename: '[name].js',
  },
  module: {
    loaders: [{
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      loaders: ['babel'],
    }],
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
    alias: {
      DateTimePicker: path.join(__dirname, '/app/components/DateTimePicker'),
    },
  },
  externals: {
    'react': 'React',
    'react-dom': 'ReactDOM',
    'moment': 'moment',
  },
  devtool: 'source-map',
};
