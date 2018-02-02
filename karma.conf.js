const webpackConfig = require('./webpack/webpack.dev.js');

module.exports = function(config) {
	config.set({
		basePath: '',
		frameworks: ['jasmine'],
		files: [
			'test/**/*Spec.js',
		],

		//reporters: ['jasmine'],
		port: 9876,
		colors: true,
		autoWatch: true,
		browsers: ['Chrome'],
		concurrency: Infinity,
		preprocessors: {
			'test/**/*Spec.js': ['webpack']
		},
		webpack: webpackConfig,
		webpackMiddleware: {
			stats: 'errors-only'
		}
	})
}
