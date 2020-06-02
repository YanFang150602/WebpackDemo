const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/library/index.js',
    output: {
        filename: 'library.js',
        path: path.resolve(__dirname, '../lib_dist'),
        library: 'root',
        libraryTarget: 'umd'
    },
    // externals: ['lodash'],
    externals: {
        lodash: {
            commonjs: 'lodash',
            commonjs2: 'lodash',
            amd: 'lodash',
            root: '_'
        }
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/library/index.html'
        })
    ]
}