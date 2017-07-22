var path = require('path')
var webpack = require('webpack')

// Determine which env to use
// by having it overriden at runtime using `cross-env NODE_ENV=...`
// Possible envs: dev, production
var nodeEnv

if (process.env.NODE_ENV) {
  nodeEnv = process.env.NODE_ENV.toLowerCase()
} else {
  nodeEnv = 'production'
}

console.log('ENV', nodeEnv)

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

function assetsPath (_path) {
  return path.posix.join('static', _path)
}

module.exports = {
  resolveLoader: {
    root: path.join(__dirname, 'node_modules')
  },

  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.js',
      '@': resolve('docs')
    },
    extensions: ['', '.js', '.vue']
  },

  module: {
    loaders: [
      {
        test: /\.vue$/,
        loader: 'vue'
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      },
      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'sass']
      },
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/
      },
      {
        test: /\.svg$/,
        loader: 'svg-inline?classPrefix'
      },
      {
        test: /\.json$/,
        loader: 'json'
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: assetsPath('img/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: assetsPath('fonts/[name].[hash:7].[ext]')
        }
      }
    ]
  },

  vue: {
    loaders: {
      scss: 'vue-style!css!sass'
    }
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"' + nodeEnv + '"'
      }
    })
  ],

  devtool: '#cheap-source-map',

  devServer: {
    historyApiFallback: true,
    noInfo: true,
    port: 8081
  }
}

if (nodeEnv === 'production') {
  module.exports.devtool = '#source-map'
  // http://vue-loader.vuejs.org/en/workflow/production.html
  module.exports.plugins = module.exports.plugins.concat([
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ])
}
