const HTMLWebpackPLugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');

const extractLESS = new ExtractTextPlugin('css/style.css');

module.exports = {
  entry: "./src/js/main.ts",
  output: {
    filename: "js/main.js",
    path: path.resolve(__dirname + "/dist")
  },
  //need to implement refreshing
  devServer: {
    hot: false,
    inline: true,
    open: true,
  },

  // Enable sourcemaps for debugging webpack's output.
  devtool: "source-map",

  resolve: {
    extensions: [".ts", ".js", ".json"],
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
    }]
  },
  plugins: [
    new HTMLWebpackPLugin({
      filename: 'index.html',
      template: `./src/views/index.pug`,
      inject: false
    }),
    extractLESS
  ]

};
