
const webpack = require('webpack');
const path = require("path");

const { WebpackManifestPlugin } = require('webpack-manifest-plugin');
const SriPlugin = require('webpack-subresource-integrity');
// const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const HtmlBeautifyPlugin = require('html-beautify-webpack-plugin');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const dotenv = require('dotenv').config({
    path: path.join(__dirname, '.env')
});

const settings = {
    dist: path.join(__dirname, 'dist'),
    // templateDist: path.join(__dirname, 'dist/templates'),
    // publicPath: path.join(__dirname, 'dist/public'), // TODO: public path per app (/dist/$app_name/...)
    src: path.resolve(__dirname, "src"),
    srcIndexJS: path.join(__dirname, "src", "index.js"),
  };
  

module.exports = {
    mode: process.env.NODE_ENV || "development",
    entry: settings.srcIndexJS,
    output: {
        filename: "index.bundle.js",
        path: settings.dist,
        publicPath: '/',
    },
    devServer: {
        contentBase: settings.dist,
        compress: true,
        historyApiFallback: true,
        hot: true, //Hot module replacement
        // port: 9000,
        writeToDisk: true,
    },
    plugins: [
        new CleanWebpackPlugin(),
        new webpack.DefinePlugin({
            "process.env": JSON.stringify(dotenv.parsed)
        }),
        new WebpackManifestPlugin(),
        // Other plugins insert here
        new HtmlWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css',
        }),
        new SriPlugin({
            hashFuncNames: ['sha256', 'sha384'],
            enabled: process.env.NODE_ENV === 'production',
        }),
        // new HtmlBeautifyPlugin({
        //     config: {
        //       html: {
        //         end_with_newline: true,
        //         indent_size: 4,
        //         indent_with_tabs: false,
        //         indent_inner_html: true,
        //         preserve_newlines: true,
        //         unformatted: []
        //       }
        //     }
        //   }),
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
                test: /\.(jpg|jpeg|png|gif|woff|woff2|eot|ttf|svg|gif|mp3)$/i,
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
                test: /\.csv$/,
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
    target: 'node',
    resolve: {
        // Allowing importing .jsx without the suffix
        extensions: ['*', '.js', '.jsx'],
        alias: {
            '../../theme.config$': path.join(
                __dirname,
                '/src/theme/theme.config',
            ),
        },
        modules: [settings.src, "node_modules"],
    },
    externals: {
    // any plugins not installed via npm
    },
    stats: {
        colors: true
    }
};
