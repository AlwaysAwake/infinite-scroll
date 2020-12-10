const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  devtool: 'eval',
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      }
    ]
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/users/view'
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'views/user.html'
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
};
