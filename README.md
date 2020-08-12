### npm install 安装依赖

### npm start 项目启动

### 目录结构描述

- ### src       // 应用

- components 

- messageType.    // 传入的数据类型

  -  imagesComponents     // 当消息的'type'为'image'类型时调用该组件，表示接收到的是图片
  -  systemComponents     // 当消息的'type'为'system'类型时调用该组件，表示接收到的是系统消息
  - textComponents     // 当消息的'type'为'text'类型时调用该组件，表示接收到的是文本

  - index.js     // 根据传入的数据判断并返回渲染结果

-  icons      // 本地图片，模拟图片数据

-  App.js     // 在此文件里接收消息
