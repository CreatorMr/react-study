# 写在前头，此部分通过官网react学习。
### 1、初始化项目
    npm init ------生成packpage.json
    dist----存放编译后的代码
    src----存放开发代码
    index.html index.js index.css 搞一套吧，放在src下面
### 2、使用webpack
    安装webpack工具
    npm install -D webpack webpack-cli
    npm install webpack --save-dev 安装到项目依赖中
    安装插件 若需要使用 Webpack 开发工具，要单独安装：
    npm install webpack-dev-server --save-dev
    npm install html-webpack-plugin --save-dev 热更新插件，动态动态生成HTML文件
    npm install clean-webpack-plugin  --save-dev 清除dist/build的文件
    npm install  html-loader/file-loader 处理图片的  前面在html中使用的图片  /  在css中背景等使用图片
    npm install -D react-hot-loader@next  热替换，增加编译效率，每次编译都进行代码的diff，只替换有所变动的地方
    这里我们一起安装npm install -D html-webpack-plugin clean-webpack-plugin webpack-dev-server css-loader webpack-merge style-loader
### 3、项目启动的时候的文件
    （1）、配置文件webapck.config.js
       
    （2）、开发npm start 启动项目使用配置webpack.dev.donf.js
       
    （3）、生产环境的配置webpack.prod.conf.js
       
### 4、启动命令以及使用环境文件配置-在package.json中添加
    ```
        {
            "scripts": {
                "start": "webpack-dev-server --open --config webpack.dev.conf.js",
                "build": "webpack --config webpack.prod.conf.js"
            }
        }
    ```
### 5、配置Babel以及react 相关
    （1）、安装Babel预设
        npm install -D babel-preset-env babel-loader babel-polyfill babel-preset-react
    （2）、创建.babelrc文件
    （3）、在配置文件中webpack.config.js中（由于安装了（1）中的）添加规则jsx的匹配
    （4）、安装react和react-dom模块以及一些其他react模块
    （5）、可以瞎搞了。



