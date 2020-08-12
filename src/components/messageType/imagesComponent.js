import React from "react";

const Images = props => {
  const { data = {}, isRevoke = false } = props;
  const { content = "", creator = "" } = data;
  const messageContent = content ? (
    <img
      src={content}
      alt="图片类型"
      style={{ width: "100%", height: "100%" }}
    />
  ) : (
    <span>图片类型</span>
  );
  console.log("传入图片格式的数据时");
  return (
    <div>
      {isRevoke ? (
        <span style={{ fontSize: "16px" }}>`${creator}撤回了一条消息`</span>
      ) : (
        <div style={{ width: "44px", height: "44px" }}>{messageContent}</div>
      )}
    </div>
  );
};

export default Images;
