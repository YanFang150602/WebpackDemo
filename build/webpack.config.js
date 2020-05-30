const merge = require('webpack-merge');
const commCfg = require('./webpack.config.comm');

module.exports = (env) => {
    console.log(env);
    
    const devCfg = {
        mode: JSON.stringify(env.NODE_ENV),
        devtool: 'cheap-module-eval-source-map',
        devServer: {
            contentBase: './dist',
            port: '8082',
            open: true
        }
    };

    return merge(commCfg, devCfg);
}