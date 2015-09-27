var webpack = require('webpack');
var mergeTrees = require('broccoli-merge-trees');
var funnel = require('broccoli-funnel');
var webpackify = require('broccoli-webpack-cached');

// Root
var projectSrc = 'src';

// HTML
var html = funnel(projectSrc, { include: [ 'html/**/*' ] });

// JS webpack
var scripts = webpackify(projectSrc, {
  devtool: 'source-map',
  entry: './js/main',
  output: {
    filename: 'js/app.js'
  },
  externals: [
    { 'react': 'React' }
  ],
  module: {
    preLoaders: [
      { test: /\.js$/, loader: 'babel-loader' }
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin()
  ]
});

module.exports = mergeTrees([ html, scripts ]);
