# qiankun脚本加载顺序错误

#### 安装

`yarn install-all`

#### 运行

`yarn start-all`

#### 复现方法

1. 打开[主应用](http://127.0.0.1:5678)

2. 点击mount，可以发现页面上有

   > my height is 200px 的文字
   
3. 点击unmount卸载子应用后再次点击mount加载子应用

4. vue组件mount时获取的高度不再是200px

#### 原因

- vue.config.js中配置了css extract

- 同时Home组件利用了webpack chunks异步加载
- 首次mount时css载入完毕后，js才执行
- 第二次加载时，css的加载是异步的，js没有等待css加载后执行

