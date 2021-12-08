const HTMLWebpackPLugin = require('html-webpack-plugin');
const webpack           = require('webpack');
const merge             = require('webpack-merge');
const common            = require('./webpack.common.js');
const UglifyJsPlugin    = require('uglifyjs-webpack-plugin');
const path              = require('path');

module.exports = merge(common, {
	//need to implement refreshing
	devServer: {
		open: true,
		compress: true,
		watchContentBase: true,
		watchOptions: {
			ignored: /node_modules/
		}
	},

	// Enable sourcemaps for debugging webpack's output.
	devtool: "source-map",

	module: {
		rules: [
			{
				test: /\.pug/,
				loader: ['raw-loader', 'pug-html-loader']
			}, {
				test: /\.html$/,
				loader: 'polymer-webpack-loader'
			}
		]
	},

	plugins: [
		new HTMLWebpackPLugin({
			filename: 'index.html',
			template: `./src/views/index.pug`,
			inject: false
		}),

		new webpack.DefinePlugin({
			'process.env': {
				'NODE_ENV': JSON.stringify('production')
			}
		}),
		new UglifyJsPlugin()
	]

});
