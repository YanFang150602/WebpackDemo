const express = require('express');
const path = require('path');
const WebpackDevMiddleWare = require('webpack-dev-middleware');
const webpack = require('webpack');
const config = require('./webpack.config.js');

const compiler = webpack(config);
const app = express();

app.use('/static', express.static(path.join(__dirname, 'public')));

app.use(WebpackDevMiddleWare(compiler, {
    publicPath:'/'
}));

app.listen('3000', () => {
    console.log('server is running!!!');
});