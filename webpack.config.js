const webpack = require('webpack');
const path = require("path");

const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { WebpackManifestPlugin } = require('webpack-manifest-plugin');
const SriPlugin = require('webpack-subresource-integrity');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const dotenv = require('dotenv').config({
    path: path.join(__dirname, '.env')
});
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require("copy-webpack-plugin");


module.exports = {
    mode: process.env.NODE_ENV || "development",
    entry: path.join(__dirname, "src", "index.js"),
    output: {
        path: path.join(__dirname, "dist"),
        filename: "index.bundle.js",
        publicPath: '/',
    },
    resolve: {
        alias: {
            '../../theme.config$': path.join(
                __dirname,
                '/src/theme/theme.config',
            ),
            images: path.resolve(__dirname, 'src/assets/images/'),
            fonts: path.resolve(__dirname, 'src/assets/fonts/'),
        },
        modules: [path.resolve(__dirname, "src"), "node_modules"],
    },
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        historyApiFallback: true,
        writeToDisk: true,
    },
    plugins: [
        new CleanWebpackPlugin(),
        new WebpackManifestPlugin(),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, "src", "index.html"),
        }),
        new webpack.DefinePlugin({
            "process.env": JSON.stringify(dotenv.parsed)
        }),
        new MiniCssExtractPlugin({
            filename: 'styles/[name].[contenthash].css',
        }),
        new SriPlugin({
            hashFuncNames: ['sha256', 'sha384'],
            enabled: process.env.NODE_ENV === 'production',
        }),
        new CopyPlugin({
            patterns: [
                { from: "src/assets/images", to: "images" },
            ],
        }),
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/i,
                exclude: /node_modules/,
                use: ["babel-loader"]
            },
            {
                test: /\.(css)$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.s[ac]ss$/i,
                use: ["style-loader", "css-loader", "sass-loader"]
            },
            {
                test: /\.(jpg|jpeg|png|gif|svg|mp3)$/i,
                use: [{
                    loader: "file-loader",
                    options: {
                        outputPath: 'images',
                    },
                }]
            },
            {
                test: /\.(woff|woff2|eot|ttf)$/i,
                use: ["file-loader"]
            },
            {
                test: /\.less$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                    },
                    'css-loader',
                    'less-loader',
                ],
            },
            {
                test: /\.(csv|tsv)$/,
                loader: 'csv-loader',
                options: {
                    dynamicTyping: true,
                    header: true,
                    skipEmptyLines: true
                }
            }
        ],
    },
    devtool: "source-map",
    target: 'web',
};
