var path = require('path')
var merge = require('webpack-merge')

module.exports = merge.smart(require(path.resolve(__dirname, '../conf/webpack.js')), {
  entry: path.resolve(__dirname, './index.js'),

  output: {
    path: path.resolve(__dirname, '../dist'),
    publicPath: path.resolve(__dirname, '../dist'),
    filename: 'bga-npm-hello-world-vue.js'
  }
})
