const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require('webpack');
const dotenv = require('dotenv').config( {
    path: path.join(__dirname, '.env')
  } );

module.exports = {
    entry: path.join(__dirname, "src", "index.js"),
    output: {
        path: path.join(__dirname, "build"),
        filename: "index.bundle.js",
        publicPath: '/',
    },
    mode: process.env.NODE_ENV || "development",
    resolve: {
        modules: [path.resolve(__dirname, "src"), "node_modules"],
    },
    devServer: {
        contentBase: path.join(__dirname, "src"),
        historyApiFallback: true,
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/i,
                exclude: /node_modules/,
                use: ["babel-loader"]
            },
            {
                test: /\.(css|scss)$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.sass$/i,
                use: ["sass-loader", "style-loader", "css-loader"]
            },
            {
                test: /\.(jpg|jpeg|png|gif|woff|woff2|eot|ttf|svg|gif|mp3)$/i,
                use: ["file-loader"]
            },
            {
                test: /\.(jpg|jpeg|png|gif|woff|woff2|eot|ttf|svg|gif|mp3)$/i,
                use: [{
                    loader: "url-loader",
                    options: {
                        limit: 8192 // in bytes
                    }
                }]
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, "src", "index.html"),
        }),
        new webpack.DefinePlugin({
            "process.env": JSON.stringify(dotenv.parsed)
        }),
    ],
    devtool: "source-map",
};
