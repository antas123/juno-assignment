import React from "react";
import avatar from "../images/Avatar.png";

const SidebarAvatar = () => {
  return (
    <div
      style={{
        height: "38px",
        width: "120px",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        position: "absolute",
        bottom: "50px",
      }}
    >
      <div>
        <img style={{ height: "40px" }} src={avatar} alt="" />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          fontSize: "12px",
          justifyContent: "center",
          marginLeft:"5px"
        }}
      >
        <p style={{ margin: "0", fontWeight: "bold" , fontFamily:"sans-serif", fontSize:"14px"}}>Elon Musk</p>
        <p style={{ margin: "0", color: "grey" , fontFamily:"sans-serif", fontSize:"14px"}}>musk@hi.com</p>
      </div>
    </div>
  );
};

export default SidebarAvatar;