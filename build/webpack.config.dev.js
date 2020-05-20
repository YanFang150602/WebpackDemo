const merge = require('webpack-merge');
const commCfg = require('./webpack.config.comm');

module.exports = (env) => {
    console.log(env);

    const devCfg = {
        mode: "development",
        devtool: 'cheap-module-eval-source-map',
        devServer: {
            contentBase: './dist',
            port: '8082',
            open: true
        },
        // module: {
        //     rules: [
        //        {
        //             test: /\.(jpg|png|jpeg)$/,
        //             use: {
        //                 loader: "url-loader",
        //                 options: {
        //                     name(resourcePath, resourceQuery) {
        //                         if(env.NODE_ENV === 'development') {
        //                             return '[name]_[hash].[ext]';
        //                         }
        //                         return '[name].[ext]';
        //                     },
        //                     outputPath: 'image/',
        //                     limit: 10240
        //                 }
        //             }
        //         }
        //     ]
        // },
        optimization: {
            usedExports: true
        }
    };

    return merge(commCfg, devCfg);
}