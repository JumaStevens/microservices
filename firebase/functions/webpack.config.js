const webpack = require('webpack')
const path = require('path')
const nodeExternals = require('webpack-node-externals')


const config = {
  entry: './src/index.js',
  output: {
    filename: 'index.js',
    path: __dirname,
    libraryTarget: 'this'
  },
  target: 'node',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  resolve: {
    extensions: [ '.js' ]
  },
  externals: [ nodeExternals() ]
}


module.exports = config
