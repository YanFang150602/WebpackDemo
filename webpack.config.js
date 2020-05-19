const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    mode: "development",
    // production 
    // devtool: 'cheap-module-source-map',
    // developmet
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        contentBase: './dist',
        port: '8081',
        open: true, 
        hot: true,       // 开启热模块功能
        hotOnly: true // 配置hotOnly: true时，编译失败时，不刷新页面
    },
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
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            ['@babel/preset-env', {
                                useBuiltIns: 'entry'
                            }]
                        ]
                    }
                } 
            },
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
            'PRODUCTION': true,
            'process.env.NODE_ENV': 'development'
        }),
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template: 'src/index.html'
        }),
        new CleanWebpackPlugin({
            // webpack --watch时，不要移除index.html
            cleanStaleWebpackAssets: false
        })
    ]
}