const path = require("path");

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
    }
}