# angularjs 1.x starter kit

基于fancyui开源项目脚手架ng-start-cli构建

webpack升级为3.0

 
npm源设置为淘宝源，修改配置改`.npmrc`文件

```
//安装依赖
npm install

//本地开发
npm run start

//发布到output目录
npm run release

//快速增加模块
gulp component --name a --path ./common
gulp component --name a //添加到components目录

//添加路由，参考 client/app/router/routerConfig.js


    {
        name:'start',
        url:"/start",
        template:'<start></start>',
        lazyload:require("bundle-loader?lazy&name=start!../components/start/start.js"),
        tracking:{
            key:'start'
        }
    },
```