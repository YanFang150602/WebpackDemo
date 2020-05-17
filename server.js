const express = require('express');
const WebpackDevMiddleWare = require('webpack-dev-middleware');
const webpack = require('webpack');
const config = require('./webpack.config.js');

const compiler = webpack(config);
const app = express();

app.use(WebpackDevMiddleWare(compiler, {
    publicPath:'/'
}));

app.listen('3000', () => {
    console.log('server is running!!!');
})
