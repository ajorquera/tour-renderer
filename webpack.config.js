const HTMLWebpackPLugin = require('html-webpack-plugin');

module.exports = {
  entry: "./src/js/main.ts",
  output: {
    filename: "bundle.js",
    path: __dirname + "/dist"
  },
  //need to implement refreshing
  devServer: {
    hot: true,
    inline: true,
    open: true,
  },

  // Enable sourcemaps for debugging webpack's output.
  devtool: "source-map",

  resolve: {
    extensions: [".ts", ".js", ".json"]
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
    }]
  },
  plugins: [
    new HTMLWebpackPLugin({
      filename: 'index.html',
      template: `./src/views/index.pug`,
      inject: false
    })
  ]

};
