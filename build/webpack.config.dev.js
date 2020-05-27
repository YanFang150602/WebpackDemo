const webpack = require('webpack');
const merge = require('webpack-merge');
const commCfg = require('./webpack.config.comm');

const devCfg = {
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
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
}

module.exports = merge(commCfg, devCfg);