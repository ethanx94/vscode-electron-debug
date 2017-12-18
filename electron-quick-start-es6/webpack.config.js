const { join } = require('path')

module.exports = {

  // Pick any source-map that does not require eval.
  // `inline-source-map` gives the best quality for development.
  devtool: 'source-map',

  entry: join(__dirname, 'main'),

  output: {
    path: join(__dirname, 'dist'),
    filename: 'main.js',
    publicPath: '/dev-dist',
    filename: 'renderer.js',
    // Bundle absolute resource paths in the source-map,
    // so VSCode can match the source file.
    devtoolModuleFilenameTemplate: '[absolute-resource-path]'
  },

  resolve: {
    modules: ['node_modules'],
    extensions: ['.ts', '.js']
  },
  target: 'electron',
  module: {
    rules: [
      { test: /\.ts$/i, use: "awesome-typescript-loader?configFileName=tsconfig.json" }
    ]
  }
}
