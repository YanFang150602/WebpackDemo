const path = require("path");
const webpack = require('webpack');

module.exports = {
    mode: "development",
    entry: "./src/index.js",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist")
    },
    module: {
        rules: [
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
        })
    ]
}