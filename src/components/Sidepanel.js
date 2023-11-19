import React from "react";
import logo from "../images/logo.png";
import "../App.css";

const MenuItem = ({ label, active }) => {
  const defaultStyles = {
    height: "40px",
    display: "flex",
    alignItems: "center",
    paddingLeft: "10px",
    fontWeight: "bold",
    fontFamily: "roboto",
    color: "grey",
    cursor: "pointer",
  };

  const activeStyles = {
    ...defaultStyles,
    backgroundColor: "#EEF5FF",
    borderRadius: "7px",
    color: "#279EFF",
  };

  const styles = active ? activeStyles : defaultStyles;

  return <div style={styles}>{label}</div>;
};

const Sidepanel = () => {
  const menuItems = [
    { label: "Overview", active: false },
    { label: "Onboarding", active: false },
    { label: "Monitoring", active: true },
    { label: "Flagging", active: false },
    { label: "Source of income", active: false },
    { label: "UAR", active: false },
  ];

  return (
    <div className="sidepanel-container">
      <img src={logo} alt="" style={{ width: "100%" }} />

      <div
        className="sidepanel-sub-container"
      >
        {menuItems.map((item, index) => (
          <MenuItem key={index} label={item.label} active={item.active} />
        ))}
      </div>
    </div>
  );
};

export default Sidepanel;