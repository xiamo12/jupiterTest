import React from "react";
import Images from "./messageType/imagesComponent";
import Text from "./messageType/textComponents";
import System from "./messageType/systemComponent";

const Messages = props => {
  const { data = {}, isRevoke = false } = props;
  const { type = "text" } = data;
  return (
    <div className={"messageWrap"}>
      {type === "image" && <Images data={data} isRevoke={isRevoke} />}
      {type === "text" && <Text data={data} isRevoke={isRevoke} />}
      {type === "system" && <System data={data} isRevoke={isRevoke} />}
    </div>
  );
};

export default Messages;
