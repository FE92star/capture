## 个人监控平台小玩具

### 环境搭建
* 开发环境：语言-`typescript`,打包工具-`rollup`
1. 配置`ts`,安装`typescript`依赖，运行`tsc --init`，自动生成`tsconfig.json`
2. 增加`rollup`打包配置项，新建`rollup.config.js`配置选项，通过一些插件配置来增加不同类型模块的打包（必须要安装typescript版本的插件）：
```js
`@rollup/plugin-commonjs`——用于将commonjs模块转化为ESModule模块，rollup方便统一处理
`@rollup/plugin-node-resolve`——用于控制rollup识别不同类型模块的引入方式
`rollup-plugin-typescript2`——用于打包ts模块的代码,比官方插件更好用
```

### 前端SDK模块的架构思路
* SDK主要是包含一个打包之后的JS脚本，异步注入到需要支持监控的项目代码中去，然后错误收集系统搜集对应的错误信息，数据处理系统按照数据规范对搜集到的错误信息进行处理，再通过上报系统上传到数据库（这层由node提供支持）

#### 错误信息分类
* 资源信息数据
1. DNS是否被劫持，未部署https协议的页面可能会发生DNS劫持现象；
2. 资源完整性数据，记录包括资源加载的先后顺序和加载时间，从而确定是否因为资源加载不全或加载时机的问题导致错误；
3. 基础的脚本错误和全局错误，`script error`这种跨域脚本错误，需要在`script`标签加上`crossorigin`属性用于捕获跨域脚本报错，拦截`window.onerror`时间用于捕获全局错误；
4. 接口请求ajax错误，全局拦截`XMLHttpRequest`请求；
* 用户操作信息数据
1. 用于操作交互型错误，记录发生错误前后用户的操作链路，从而能更好的排查相应的错误信息；
* 用户所处环境信息数据
1. 用户使用的设备信息，网络环境，定位，用户id等等；
