const path = require('path')
module.exports = {
  entry: './app.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },
  module:{
    preloaders:[
      {
        test:/\.js$/,
        loader: 'eslint-loader',
        exclude: /node_modules/
      }
    ],
    loaders:[
      {
        test:/\.coffee$/,
        loader: 'coffee-loader',
        exclude: /node_modules/
      },
      {
        test:/\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets:['es2015']
        }
      }
    ]
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'build'),
    inline: true,
    port: 3000
  }
}
