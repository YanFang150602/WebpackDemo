const merge = require('webpack-merge');
const commCfg = require('./webpack.config.comm');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');

const prodCfg = {
    mode: 'production',
    devtool: 'cheap-module-source-map',
    module: {
        rules: [
            {
                test: /\.css$/,
                use:[
                    MiniCssExtractPlugin.loader, 
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
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 2
                        }
                    },
                    'postcss-loader',
                    'sass-loader'
                ]
            }
        ]
    },
    optimization: {
        minimizer: [
            new OptimizeCssAssetsWebpackPlugin({})
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({})
    ]
}

module.exports = merge(commCfg, prodCfg);