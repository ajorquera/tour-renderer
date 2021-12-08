const path              = require('path');

module.exports = {
	entry: './src/js/main.ts',
	mode: 'development',
	output: {
		filename: 'js/[name].bundle.js',
		path: path.resolve('..', __dirname,'../', 'dist')
	},

	resolve: {
		extensions: ['.ts', '.js', '.json', '.tsx'],
		alias: {
			models: path.resolve(__dirname, 'src/js/models')
		}
	},

	module: {
		rules: [{
			test: /\.tsx?$/,
			loader: 'ts-loader'
    }]
	},
	plugins: [
	]
};
