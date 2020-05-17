# webpack快速入门

进入WebpackDemo目录下

```shell
#初始化WebpackDemo目录，增加package.json文件
npm init -y
npm install -D webpack 
#webpack4+以上版本需要安装webpack-cli
npm install -D webpack-cli
```

在WebpackDemo目录下，创建dist、src两个目录，且分别创建index.html、index.js文件

```shell
npm install -P loadsh
```

loadsh模块在src/index.js里被import

在WebpackDemo目录下，创建webpack.config.js文件

```shell
#对index.js文件进行编译
npx webpack
```

# webpack处理css模块

## 处理css

在src目录下创建style目录，并创建index.css

在index.js文件里import index.css文件

```js
import "./style/index.css"
```

安装css-loader、style-loader，对css模块处理的loader

```shell
# css-loader处理css文件@import另外一个css文件
# style-loader将css文件里的样式挂到页面style标签里
npm install -D css-loader style-loader
```

webpack配置文件增加对css模块处理规则

```js
module.exports = {
	 ...
	 module: {
        rules: [
            {
                test: /\.css$/,
                use:["style-loader", "css-loader"]
            }
            ...
        ]
    }
    ...       
}
```

修改webpack.config.js文件，处理css模块

```shell
#执行webpack，处理index.js里的css模块
npx webpack
```

## 处理s(c|a)ss

```shell
npm install sass-loader node-sass --save-dev
```

index.js里引入scss文件

```js
import "./style/scssdex.scss";
```

webpack配置增加sass-loader处理scss文件

```js
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
                test: /\.s(c|a)ss$/,
                use:["style-loader", "css-loader", "sass-loader"]
            }
        ]
    }
}
```

## postcss-loader

```shell
npm i -D postcss-loader
```

新增配置文件postcss.config.js

```js
# plugins可以是object，也可以是array
module.exports = {
  parser: 'sugarss',
  plugins: {
    'postcss-import': {},
    'postcss-preset-env': {},
    'cssnano': {}
  }
}
```

```js
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
                test: /\.scss$/,
                use:[
                    "style-loader", 
                    {
                        loader: "css-loader",
                        options: {
                            importLoaders: 2
                        }
                    },
                    "postcss-loader",
                    "sass-loader"
                ]
            }
        ]
    }
}
```

postcss-loader建议使用在css-loader/style-loader后面，使用在sass-loader前面

# 将该目录设置成git仓库

```shell
# 将该目录设置成本地仓库
git init
# 为本地仓添加远程仓
git remote add origin git@github.com:YanFang150602/WebpackDemo.git
# 将本地分支关联到远程仓origin的master分支上
git branch --track origin/master
# 将编写的代码由工作区提交到暂存区
git add .
# 由暂存区提交到版本库
git commit -m "描述"
# 将本地提交的代码上传到远程仓上
git push
git push origin master
git push -u origin master
```

# plugins

plugins帮助webpack在运行到某个时刻的时候，自动做一些事情

## webpack.DefinePlugin

webpack.DefinePlugin可以用来定义全局变量

修改webpack的配置文件

```js
const webpack = require('webpack');

module.exports = {
    ...
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': 'production'
        })
    ]
}
```

在index.js里使用webpack.DefinePlugin定义的全局变量

```js
console.log(process.env.NODE_ENV);
```

## html-webpack-plugin

html-webpack-plugin会在打包结束后，自动生成一个html文件，并把打包生成的js自动引入到这个html文件中

```shell
npm i html-webpack-plugin -D
```

修改webpack的配置文件

```js
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    ...
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.html'
        })
    ]
}
```



## clean-webpack-plugin

默认情况下，此插件将在每次成功重建后删除webpack的output.path目录中的所有文件以及所有未使用的webpack资产。

```shell
npm i clean-webpack-plugin -D
```

修改webpack的配置文件

```js
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    ...
    plugins: [
        new CleanWebpackPlugin(['dist'])
    ]
}
```


