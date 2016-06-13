/* eslint quote-props: 0 */
import webpack from 'webpack';
import path from 'path';

module.exports = {
  context: __dirname,
  entry: [
    'webpack-dev-server/client?http://localhost:8080/',
    'webpack/hot/dev-server',
    './example/js/app.js',
  ],
  output: {
    path: path.join(__dirname, '/example/js/'),
    filename: 'bundle.js',
    publicPath: '/assets/',
  },
  module: {
    loaders: [{
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      loaders: ['react-hot', 'babel'],
    }],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
  resolve: {
    extensions: ['', '.js', '.jsx'],
    alias: {
      DateTimePicker: path.join(__dirname, '/app/components/DateTimePicker'),
      InputDateTimePicker: path.join(__dirname, '/app/components/InputDateTimePicker'),
    },
  },
  devtool: 'source-map',
};
