import React, { useState, useEffect } from "react";
// import { useState } from "react";
import "./App.css";
import Messages from "./components";

const icon1 = require("./icons/time.png");

function App() {
  // 如果是从后端接收数据
  // const [dataSource, setDataSource] = useState({});

  //系统消息 -- 是否撤回消息
  const [isRevoke, setIsRevoke] = useState(false);
  useEffect(() => {
    setIsRevoke(false);
  }, []);
  //模拟数据：
  let dataArrs = [
    {
      type: "text", //"text"文本格式； 'image'图片格式；'system'系统消息
      content: "", //当type为text时此处为字符串；当type为image时此处为图片地址
      creator: "xiamo" //消息发送者
    },
    {
      type: "image",
      content: icon1,
      creator: "xiamo"
    },
    {
      type: "system",
      content: ["system", "test"],
      creator: "xiamo"
    }
  ];

  let dataSource = dataArrs[Math.floor(Math.random() * dataArrs.length)];
  return (
    <div className="App">
      <Messages data={dataSource} isRevoke={isRevoke} />
    </div>
  );
}

export default App;
