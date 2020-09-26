const path = require("path");
const MiniCSSExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
// const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  mode: "development",
  devServer: {
    open: true,
    contentBase: "./dist",
    historyApiFallback: true,
  },
  devtool: "source-map",
  entry: {
    index: "./src/index.js",
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: {
          loader: "babel-loader",
          options: {
            exclude: "node_modules",
          },
        },
      },
      {
        test: /\.(scss|sass)$/,
        use: [MiniCSSExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.css$/,
        use: [MiniCSSExtractPlugin.loader, "css-loader"],
      },

      {
        test: /\.(jpg|jpeg|gif|png|svg)$/,
        use: ["file-loader"],
      },
      {
        test: /\.(woff|woff2|eot|ttf)$/,
        use: ["file-loader"],
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCSSExtractPlugin({
      filename: "[name].bundle.css",
    }),
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
    // new CopyPlugin({
    //   patterns: [{ from: "./src/images/", to: "images/" }],
    // }),
  ],
};
