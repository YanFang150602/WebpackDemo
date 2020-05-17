[1mdiff --git a/readme.md b/readme.md[m
[1mindex 988ef1e..20a31dd 100644[m
[1m--- a/readme.md[m
[1m+++ b/readme.md[m
[36m@@ -334,6 +334,7 @@[m [mnpm install express webpack-dev-middleware --save-dev[m
 [m
 ```js[m
 const express = require('express');[m
[32m+[m[32mconst path = require('path');[m[41m[m
 const WebpackDevMiddleWare = require('webpack-dev-middleware');[m
 const webpack = require('webpack');[m
 const config = require('./webpack.config.js');[m
[36m@@ -341,6 +342,8 @@[m [mconst config = require('./webpack.config.js');[m
 const compiler = webpack(config);[m
 const app = express();[m
 [m
[32m+[m[32mapp.use('/static', express.static(path.resolve(__dirname, 'public')));[m[41m[m
[32m+[m[41m[m
 app.use(WebpackDevMiddleWare(compiler, {[m
     publicPath:'/'[m
 }));[m
[36m@@ -353,7 +356,7 @@[m [mapp.listen('3000', () => {[m
 [m
 修改package.json文件[m
 [m
[31m-```[m
[32m+[m[32m```json[m[41m[m
 ...[m
   "scripts": {[m
     "bundle": "webpack",[m
