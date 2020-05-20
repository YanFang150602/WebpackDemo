const merge = require('webpack-merge');
const commCfg = require('./webpack.config.comm');

const prodCfg = {
    mode: 'production',
    devtool: 'cheap-module-source-map',
}

module.exports = merge(commCfg, prodCfg);

