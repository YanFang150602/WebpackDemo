const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    mode: 'development',
    // production 
    // devtool: 'cheap-module-source-map',
    // developmet
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        contentBase: './dist',
        port: '8081',
        open: true, 
        hot: true,       // 开启热模块功能
        //hotOnly: true    // 配置hotOnly: true时，编译后不刷新页面
    },
    // entry: './src/index.js',
    entry: {
        index: './src/index.js'
    },
    output: {
        // chunkFilename: '[id].js',
        filename: '[name].js',
        // publicPath: 'http://www.cdn.com.cn',
        path: path.resolve(__dirname, 'dist')
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
            },
            {
                test: /\.css$/,
                use:[
                    'style-loader', 
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1
                        }
                    },
                    'postcss-loader'
                ]
            },
            {
                test: /\.scss$/,
                use:[
                    'style-loader', 
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 2
                        }
                    },
                    'postcss-loader',
                    'sass-loader'
                ]
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
            'PRODUCTION': false,
            'process.env': {
                // 'NODE_ENV': '"development"'
                'NODE_ENV':  JSON.stringify(process.env.NODE_ENV)
            }
        }),
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template: 'src/index.html'
        }),
        new CleanWebpackPlugin({
            // webpack --watch时，不要移除index.html
            cleanStaleWebpackAssets: false
        })
    ],
    optimization: {
        usedExports: true
    }
}