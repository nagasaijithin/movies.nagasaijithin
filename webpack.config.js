const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const dontEnv = require("dotenv-webpack");

module.exports = {
  entry: ["@babel/polyfill", "./src/index.js"],
  output: {
    path: path.resolve(__dirname, "bulid"),
    filename: "js/bundle.js",
  },
  devServer: {
    contentBase: "./bulid",
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "./index.html",
      template: "./src/index.html",
    }),
    new dontEnv(),
  ],
  module: {
    rules: [
      {
        test: /\.js?/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /.scss?/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
};
