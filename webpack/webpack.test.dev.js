const HTMLWebpackPLugin = require('html-webpack-plugin');
const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {

	//need to implement refreshing
	devServer: {
		hot: true,
		inline: true,
		open: true,
		watchContentBase: true,
		watchOptions: {
			ignored: /node_modules/,
			poll: true
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
		new webpack.NamedModulesPlugin(),
		new webpack.HotModuleReplacementPlugin(),
		new webpack.DefinePlugin({
			'process.env': {
				'NODE_ENV': JSON.stringify('development')
			}
		})
	]
});
