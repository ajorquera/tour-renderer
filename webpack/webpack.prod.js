const HTMLWebpackPLugin = require('html-webpack-plugin');
const webpack           = require('webpack');
const merge             = require('webpack-merge');
const common            = require('./webpack.common.js');
const UglifyJsPlugin    = require('uglifyjs-webpack-plugin');

const path = require('path');

module.exports = merge(common, {
	entry: "./src/js/TourRenderer/TourRenderer.tsx",
	output: {
		filename: "js/TourRenderer.min.js",
		path: path.resolve('..', __dirname,'../', "dist")
	},

	module: {

	},
	plugins: [
		new webpack.DefinePlugin({
			'process.env': {
				'NODE_ENV': JSON.stringify('production')
			}
		}),
		new UglifyJsPlugin()
	]

});
