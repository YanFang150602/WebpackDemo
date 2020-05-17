const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = env => {
    return {
        mode: "development",
        entry: {
            test: './src/index.js',
        },
        output: {
            filename: "[name].js",
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
                    use:["style-loader", "css-loader"]
                },
                {
                    test: /\.scss$/,
                    use:["style-loader", "css-loader", "sass-loader"]
                },{
                    test: /\.(jpg|png|jpeg)$/,
                    // use: [
                    //     {
                    //         loader: "file-loader"
                    //     }
                    // ]

                    // loader: "file-loader"

                    use: {
                        loader: "url-loader",
                        options: {
                            name(resourcePath, resourceQuery) {
                                if(env.NODE_ENV === 'development') {
                                    return '[name]_[hash].[ext]';
                                }
                                return '[name].[ext]';
                            },
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
                template: './src/index.html'
            }),
            new CleanWebpackPlugin()
        ]
    }
}