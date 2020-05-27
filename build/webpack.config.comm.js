const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    // entry: './src/index.js',
    entry: {
        index: './src/index.js'
    },
    output: {
        // 与optimization.splitChunks分割出来的js的文件名有关，其中name是cacheGroup里的名字
        chunkFilename: '[name].output.chunk.js',
        filename: '[name].js',
        // publicPath: 'http://www.cdn.com.cn',
        path: path.resolve(__dirname, '../dist')
    },
    module: {
        rules: [
            // {
            //     test: /\.js$/,
            //     exclude: /node_modules/,
            //     use: {
            //         loader: 'babel-loader',
            //         options: {
            //             presets: [
            //                 ['@babel/preset-env', {
            //                     useBuiltIns: 'entry'
            //                 }]
            //             ]
            //         }
            //     } 
            // },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.(eot|svg|ttf|woff)$/,
                use: {
                    loader: 'file-loader'
                }
            },{
                test: /\.(jpg|png|jpeg)$/,
                use: {
                    loader: 'url-loader',
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
            'process.env': {
                // 'NODE_ENV': '"development"'
                'NODE_ENV':  JSON.stringify(process.env.NODE_ENV)
            }
        }),
        new HtmlWebpackPlugin({
            template: 'src/index.html'
        }),
        new CleanWebpackPlugin({
            // webpack --watch时，不要移除index.html
            cleanStaleWebpackAssets: false
        })
    ],
    optimization: {
        // Tree Shaking
        usedExports: true,
        splitChunks: {
            chunks: 'all',
            minSize: 30000,
            maxSize: 0,
            // 被多少个打包生成的文件给引用了
            minChunks: 1,
            maxAsyncRequests: 6,
            maxInitialRequests: 4,
            automaticNameDelimiter: '_',
            cacheGroups: {
                // 自定义个vendor的cacheGroup，分割node_modules下指定的模块
                react: {
                    test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
                    priority: -5,
                    name: 'vendor',
                    chunks: 'all',
                    // 在webpack-dev-server时，会报错
                    // filename: 'react.vendor.js'
                },
                thirdPart: {
                    test: /[\\/]node_modules[\\/]/,
                    priority: -10,
                    // filename: 'vendors.js'
                },
                common: {
                    // minChunks: 2,
                    minSize: 1000,
                    priority: -20,
                    reuseExistingChunk: true
                }
            }
        }
    }
}