const HTMLWebpackPLugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

const extractLESS = new ExtractTextPlugin('css/style.css');

module.exports = {
	entry: "./src/js/main.ts",
	output: {
		filename: "js/main.js",
		path: path.resolve(__dirname + "/dist")
	},

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

	resolve: {
		extensions: [".ts", ".js", ".json", ".tsx"],
		alias: {
			models: path.resolve(__dirname, 'src/js/models')
		}
	},

	module: {
		rules: [{
			test: /\.tsx?$/,
			loader: "awesome-typescript-loader",
			options: {
				"useBabel": true,
				"babelOptions": {
					"babelrc": false,
					/* Important line */
					"presets": ["es2015"]
				}
			}
		}, {
			test: /\.pug/,
			loader: ['raw-loader', 'pug-html-loader']
		}, {
			test: /\.less$/i,
			use: extractLESS.extract(['css-loader', 'less-loader'])
		},{
			test: /\.html$/,
			loader: 'polymer-webpack-loader'
		}]
	},
	plugins: [
		new HTMLWebpackPLugin({
			filename: 'index.html',
			template: `./src/views/index.pug`,
			inject: false
		}),
		extractLESS,
		new webpack.NamedModulesPlugin(),
		new webpack.HotModuleReplacementPlugin(),
		new webpack.DefinePlugin({
			'process.env': {
				'NODE_ENV': JSON.stringify('development')
			}
		})
	]

};
