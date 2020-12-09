const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: ["./src/index.js"],
  output: {
    path: path.join(__dirname, "dist"),
    filename: "linkedin-insight.js",
    library: "LinkedInTag",
    libraryTarget: "umd",
    globalObject: "typeof self !== 'undefined' ? self : this"
  },
  module: {
    rules: [
      {
        use: "babel-loader",
        test: /\.js$/,
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [".js"]
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env": { NODE_ENV: "production" }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false
    }),
    new webpack.optimize.AggressiveMergingPlugin()
  ]
};
