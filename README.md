# vue-structure
> vue2 + express 脚手架

## 客户端
```
# 生产环境
npm run build
# 开发环境
npm run dev
```

## 服务端
```
# 开发环境
npm run server
```

## 技术选型
```
vue: 2.2.2
vue-router: 2.2.0
```

## 项目目录
```
├─build     // webpack 相关配置文件
│
├─dist      // webpack打包后生成文档存放目录
│
├─client    // 客户端程序目录
│  │
│  ├─api         // API文件
│  │
│  ├─assets      // 静态资源文件
│  │
│  ├─components  // 组件文件
│  │
│  ├─entries     // 入口文件
│  │
│  ├─pages       // 页面文件
│  │
│  ├─router      // 路由文件
│  │
│  ├─store       // 状态文件
│  │
│  ├─template    // 独立文件
│  │
│  ├─utils       // 工具文件
│  │
├─server    // 服务端程序目录
│  
```

## todo
[ ] 初步增加对服务端的支持
[ ] 划分文件夹结构
[ ] 修改对部分文件的指向处理
[ ] 增加页面文件管理
[ ] 增加组件文件管理
[ ] 增加入口文件管理
[ ] 增加状态文件管理(增加vuex、vuex-router-sync)
[ ] 增加服务端RestfulApi模拟
[ ] 增加api请求
[ ] 支持spa项目
[ ] 支持多spa项目
[ ] 支持ssr项目
[ ] 支持ssr+spa混合项目
