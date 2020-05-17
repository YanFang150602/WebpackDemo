const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    mode: "development",
    // entry: "./src/index.js",
    entry: {
        index: './src/index.js'
    },
    output: {
        // chunkFilename: '[id].js',
        filename: "[name].js",
        // publicPath: 'http://www.cdn.com.cn',
        path: path.resolve(__dirname, "dist")
    },
    module: {
        rules: [
            {
                test: /\.(eot|svg|ttf|woff)$/,
                use: {
                    loader: 'file-loader'
                }
            },
            {
                test: /\.css$/,
                use:[
                    "style-loader", 
                    {
                        loader: "css-loader",
                        options: {
                            importLoaders: 1
                        }
                    },
                    "postcss-loader"
                ]
            },
            {
                test: /\.scss$/,
                use:[
                    "style-loader", 
                    {
                        loader: "css-loader",
                        options: {
                            importLoaders: 2
                        }
                    },
                    "postcss-loader",
                    "sass-loader"
                ]
            },{
                test: /\.(jpg|png|jpeg)$/,
                use: {
                    loader: "url-loader",
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'image/',
                        limit: 10240
                    }
                }
            }
        ]
    },
    plugins: [
        // 定义全局变量
        new webpack.DefinePlugin({
            PRODUCTION: true,
            'process.env.NODE_ENV': process.env.NODE_ENV
        }),
        new HtmlWebpackPlugin({
            template: 'src/index.html'
        }),
        new CleanWebpackPlugin()
    ]
}