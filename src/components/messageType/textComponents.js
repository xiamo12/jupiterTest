import React from "react";

const Text = props => {
  const { data = {}, isRevoke = false } = props;
  const { content = "", creator = "" } = data;
  const messageContent = content || <div>默认文字</div>;
  console.log("传入文本格式的数据时");
  return (
    <div className={"textWrap"}>
      {isRevoke ? (
        <span style={{ fontSize: "12px" }}> {creator}撤回了一条消息</span>
      ) : (
        <span style={{ fontSize: "22px" }}>{messageContent}</span>
      )}
    </div>
  );
};

export default Text;
