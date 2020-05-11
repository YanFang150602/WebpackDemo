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

在src目录下创建style目录，并创建index.css

在index.js文件里import index.css文件

```shell
npm install -D ss-loader style-loader
```

修改webpack.config.js文件，处理css模块

```shell
#执行webpack，处理index.js里的css模块
npx webpack
```

将该目录设置成git仓库

git init

git remote add origin git@github.com:YanFang150602/WebpackDemo.git





