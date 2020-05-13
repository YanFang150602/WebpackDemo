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

## 1、处理css

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

## 2、处理s(c|a)ss

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





