var path = require('path');

  const HtmlWebpackPlugin = require("html-webpack-plugin");

  module.exports = {
      entry: './assets/js/index.js',
      output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname,'./dist')
      },
      module: {
          rules: [
              {
                  test: /\.js$/,
                  exclude: /node_modules/,
              },
              {
                  test: /\.css$/,
                  use: ["style-loader", "css-loader"]
              }
          ]
      },
      plugins: [
          new HtmlWebpackPlugin({
              template: "./index.html"
          })
      ]
  };

/*
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './assets/js/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname,'./dist')
  },
    plugins: [new MiniCssExtractPlugin()],
    module: {
      rules: [
        {
          test: /\.css$/i,
          use: [MiniCssExtractPlugin.loader, 'css-loader'],
        },
      ],
    },
  };
*/
