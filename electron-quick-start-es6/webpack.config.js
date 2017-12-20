const path = require('path')
const HtmlPlugin = require('html-webpack-plugin');

module.exports = {

  // Pick any source-map that does not require eval.
  // `inline-source-map` gives the best quality for development.
  devtool: 'source-map',
  target: 'electron-renderer',
  entry: path.join(__dirname, 'main'),

  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js',
  },
  // devServer: {
    // contentBase: './dist',
    // port: 53514,
    // inline: true,
    // hot: true
  // },
  resolve: {
    modules: ['node_modules'],
    extensions: ['.ts', '.js']
  },
  plugins: [
    new HtmlPlugin({ template: path.resolve(__dirname, 'index.html') })
  ],
  module: {
    rules: [
      { test: /\.ts$/i, use: "awesome-typescript-loader?configFileName=tsconfig.json" }
    ]
  },
  node: {
      fs: 'empty',
      __dirname: false
  }
}
