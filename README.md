# qiankun脚本加载顺序错误

#### 安装

`yarn install-all`

#### 运行

`yarn start-all`

#### 复现方法

1. 编译完毕后，打开[主应用dev](http://127.0.0.1:5678)和[主应用prod](http://127.0.0.1:5679)

2. dev模式中子应用的样式未加载到主应用的head中，prod模式中head被污染
