const HTMLWebpackPLugin = require('html-webpack-plugin');
const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');

module.exports = merge(common, {
	entry: "./src/js/TourRenderer/TourRenderer.tsx",
	output: {
		filename: "js/TourRenderer.js",
		path: path.resolve('..', __dirname,'../', "dist")
	},

	// Enable sourcemaps for debugging webpack's output.
	devtool: "source-map",

	module: {

	},
	plugins: [
		new webpack.DefinePlugin({
			'process.env': {
				'NODE_ENV': JSON.stringify('development')
			}
		})
	]
});
