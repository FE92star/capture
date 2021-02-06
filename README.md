## 个人监控平台小玩具

### 环境搭建
* 开发环境：语言-`typescript`,打包工具-`rollup`
1. 配置`ts`,安装`typescript`依赖，运行`tsc --init`，自动生成`tsconfig.json`
2. 增加`rollup`打包配置项，新建`rollup.config.js`配置选项，通过一些插件配置来增加不同类型模块的打包（必须要安装typescript版本的插件）：
```js
`@rollup/plugin-commonjs`——用于将commonjs模块转化为ESModule模块，rollup方便统一处理
`@rollup/plugin-node-resolve`——用于控制rollup识别不同类型模块的引入方式
`rollup-plugin-typescript2`——用于打包ts模块的代码,比官方插件更好用
// 
```

