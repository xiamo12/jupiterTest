import React from "react";

const System = props => {
  const { data = {}, isRevoke = false } = props;
  const { content = [], creator = "" } = data;
  const messageContent = content.map((item, index) => {
    return <li key={index}>{item}</li>;
  }) || <div>系统消息文本测试</div>;
  console.log("系统消息");
  return (
    <div>
      {isRevoke ? (
        <span style={{ fontSize: "12px" }}> {creator}撤回了一条消息</span>
      ) : (
        <ul className={"systemContent"}>{messageContent}</ul>
      )}
    </div>
  );
};

export default System;
