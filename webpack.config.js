const webpack = require('webpack')
const path = require('path')
const Dotenv = require('dotenv-webpack')
const VueLoaderPlugin = require('vue-loader/lib/plugin')


const config = {
  entry: './vue/main.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'firebase/public'),
    publicPath: ''
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.pug$/,
        loader: 'pug-plain-loader'
      },
      {
        test: /\.sass$/,
        use: [
          'vue-style-loader',
          'css-loader',
          'postcss-loader',
          {
            loader: 'sass-loader',
            options: {
              indentedSyntax: true
            }
          },
          {
            loader: 'sass-resources-loader',
            options: {
              resources: path.resolve(__dirname, 'vue/assets/sass/global.sass')
            }
          }
        ]
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|gif)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]'
        }
      },
      {
        test: /\.svg$/,
        loader: 'vue-svg-loader',
        options: {
          svgo: {
            plugins: [
              { removeDoctype: true },
              { removeComments: true }
            ]
          }
        }
      }
    ]
  },
  plugins: [
    new Dotenv(),
    new VueLoaderPlugin()
  ],
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '~': path.resolve(__dirname, 'vue'),
      '~comp': path.resolve(__dirname, 'vue', 'components')
    }
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true,
    overlay: true,
    contentBase: path.join(__dirname, 'firebase/public'),
  },
  performance: {
    hints: false
  },
  devtool: '#eval-source-map'
}

if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = '#source-map'
  // http://vue-loader.vuejs.org/en/workflow/production.html
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ])
}


// export
module.exports = config
