# eladmin_1_0 项目介绍
这个项目完全是以学习为目的创建的，不会用于任何商业用途，很多内容是参照的eladmin开源项目。

项目使用vue2.x进行创建

## 1 项目近期更新

### 1.1 router配置
目前，项目内容较少，router目录仅配置了两条，即**登录界面**和**主界面**,目录也对应了相应的**组件**，详情请查看router/index.js
### 1.1 elementUI引入
在整个项目中引入了elementUI，主要是为了统一界面，并且便于开发，在登录界面中，几个输入框和按钮均为elementUI的内容，在主界面中，目前用到的是菜单栏，用起来感觉十分方便。
### 1.2 登录界面
登录界面在views/Login.vue位置,里面的内容十分简单，只包括三个输入框和一个登录按钮，目前也没有模拟真实的验证过程，点击登录会直接跳转到主界面。
### 1.3 主界面
主界面入口在layout/index.vue，其中，layout文件夹下的所有组件均是为了这个主界面服务，下面的components下又细分了多个文件夹，用来给组件进行归类（目前只有Sidebar这一个文件夹）
components下面的index.js的作用是把components下面的组件归类提取出来，便于在index.vue文件中使用。
#### 1.3.1侧边栏
侧边栏使用elementUI的纵向菜单栏，目前内容是写死的，后面的更新会根据json的内容自动生成菜单栏。
#### 1.3.2内容容器
内容容器从上到下应该分为三个部分，第一个是标题栏，第二个是导航栏，第三个是内容窗口，目前内容还没有开始写，只有一个折叠菜单的按钮有实际的作用。
### 1.2 VUEX结构
VUEX用来进行全局变量的管理，目录在store/index.js中，目前与其有关的只有折叠菜单按钮。
## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```
## memo
2023/4/28 需要学习以下ElementUI，还有vue路由的常用功能

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
