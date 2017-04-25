var htmlWebpackPlugin = require('html-webpack-plugin')
var path = require('path')

module.exports = {
  entry: './src/app.js',
  output: {
    path: './dist',
    filename: 'js/[name].bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.html$/,
        loader: 'html-loader'
      },
      {
        test: /\.js$/,
        loader: 'babel',
        include: path.resolve(__dirname, 'src'),
        exclude: path.resolve(__dirname, 'node_modules'),
        query: {
          presets: ['latest']
        }
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader?importLoaders=1!postcss-loader'
      },
      {
        test: /\.tpl$/,
        loader: 'ejs'
      },
      {
        test: /\.less$/,
        loader: 'style!css!postcss!less'
      },
      {
        test: /\.scss$/,
        loader: 'style!css!postcss!scss'
      }
    ]
  },
  postcss: [
    require('autoprefixer')({
      broswers: ['last 5 versions']
    })
  ],
  plugins: [
    new htmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: 'body'
    })
  ]
}
