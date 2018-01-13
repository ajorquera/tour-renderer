const path              = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const extractLESS       = new ExtractTextPlugin('css/style.css');

module.exports = {
	entry: './src/js/main.ts',
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
			loader: 'awesome-typescript-loader'
		}, {
			test: /\.less$/i,
			use: extractLESS.extract([{loader: 'css-loader', options: {minimize: true}}, 'less-loader'])
		}]
	},
	plugins: [
		extractLESS
	]
};
