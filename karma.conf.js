const webpackConfig = require('./webpack.config.js');

module.exports = function(config) {
  config.set({
    webpack: webpackConfig,
    basePath: '',
    frameworks: ['jasmine'],
    files: [
      'test/**/*Spec.js',
    ],
    
    //reporters: ['jasmine'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: true,
    concurrency: Infinity,
    preprocessors: {
      'test/**/*Spec.js': ['webpack']
    },
  })
}
