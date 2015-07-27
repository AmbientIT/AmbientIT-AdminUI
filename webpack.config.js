var path = require('path'),
  webpack = require("webpack"),
  pkg = require('./package.json'),
  HtmlWebpackPlugin = require('html-webpack-plugin'),
  ngAnnotatePlugin = require('ng-annotate-webpack-plugin'),
  merge = require('lodash.merge');


var config;


switch(process.env.NODE_ENV){
  case 'build':
    config = {
      devtool: 'source-map',
      entry: path.join(__dirname, './src/app.js'),
      output: {
        path: path.join(__dirname,'./dist'),
        filename: 'bundle-[hash:6].js'
      }
    };
    break;
  case 'test':
    config = {
      devtool: 'inline-source-map',
      entry: {},
      module: {
        preloader: [{
            test: /\.js$/,
            exclude: [
              /node_modules/,
              /\.spec\.js$/
            ],
            loader: 'isparta-instrumenter'
          }]
      }
    };
    break;
  default:
    config = {
      devtool: 'eval',
      entry:
        path.join(__dirname, './src/app.js'),
      output: {
        path: path.join(__dirname,'./public'),
        filename: 'bundle-[hash:6].js'
      }
    };
    break;
}


module.exports = merge(config,{
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules\/(?!admin-config)/
      },
      {
        test: /\.(woff2?|svg|ttf|eot)(\?.*)?$/,
        loader: 'url'
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/,
        loader: 'file?name=img/[name].[ext]'
      },
      {
        test: /\.scss$/,
        loader: "style!css!sass"
      },
      {
        test: /\.css$/,
        loader: "style!css"
      },
      {
        test: /\.html$/,
        loader: 'raw'
      }]
  },
  plugins: [
    new webpack.DefinePlugin({
      global: {
        env: JSON.stringify(process.env.NODE_ENV)
      }
    }),
    new HtmlWebpackPlugin({
      template: path.join('index.html'),
      inject: 'body'
    }),
    new ngAnnotatePlugin({
      add: true
    }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin()
  ],
  devServer :{
    contentBase: './public',
    stats: {
      modules: false,
      cached: false,
      colors: true,
      chunk: false
    }
  }
});
