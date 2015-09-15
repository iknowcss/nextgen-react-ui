module.exports = function (config) {
  config.set({
    basePath: '',
    autoWatch: true,
    frameworks: ['mocha', 'chai'],
    browsers: ['Chrome'],
    //reporters: ['coverage'],
    reporters: ['progress'],

    files: [
      '**/*Spec.js'
    ],

    preprocessors: {
      //'../src/js/**.js': ['coverage'],
      '**/*Spec.js': ['webpack']
    },

    plugins: [
      'karma-webpack',
      'karma-mocha',
      'karma-chai',
      'karma-coverage',
      'karma-phantomjs-launcher',
      'karma-chrome-launcher'
    ],

    webpack: {
      externals: [
        { 'react': 'React' }
      ],
      module: {
        preLoaders: [
          {
            test: /\.js$/,
            loader: 'babel-loader'
          }
        ]
      }
    },

    webpackMiddleware: {
      // webpack-dev-middleware configuration
      // i. e.
      noInfo: true
    }

  });
};