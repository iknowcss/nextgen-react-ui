module.exports = function (config) {
  config.set({
    basePath: '',
    autoWatch: true,
    frameworks: ['mocha'],
    browsers: ['PhantomJS'],
    reporters: ['coverage'],

    files: [
      '**/*Spec.js'
    ],

    preprocessors: {
      '../src/js/**.js': ['coverage'],
      '**/*Spec.js': ['webpack']
    },

    plugins: [
      'karma-webpack',
      'karma-mocha',
      'karma-coverage',
      'karma-phantomjs-launcher'
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