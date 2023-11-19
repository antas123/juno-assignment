import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import "../App.css";

const Header = ({ isPending, handleDash, setModalOpen }) => {
  return (
    <div className="head">
      <p
        style={{
          fontSize: "32px",
          fontWeight: "600",
          marginBottom: "0px",
          marginTop: "25px",
        }}
      >
        Monitoring
      </p>
      <div className="subhead">
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            width: "160px",
          }}
        >
          <h5
            style={{
              color: isPending ? "#279EFF" : "#C4DFDF",
              cursor: "pointer",
            }}
            className={`tab_btn ${isPending ? "active_tab" : ""}`}
            onClick={() => handleDash(1)}
          >
            Pending
          </h5>
          <h5
            style={{
              color: !isPending ? "#279EFF" : "#C4DFDF",
              cursor: "pointer",
            }}
            className={`tab_btn ${!isPending ? "active_tab" : ""}`}
            onClick={() => handleDash(2)}
          >
            Completed
          </h5>
        </div>
        <div style={{ marginTop:"-35px"}}>
          <button
            style={{
              backgroundColor: "#F6D8D8",
              height: "40px",
              padding: "8px 16px 8px 16px",
              borderRadius: "7px",
              color: "#D13B3B",
              fontWeight: "500",
              border: "none",
              cursor:"pointer"
            }}
            onClick={() => setModalOpen(true)}
          >
            <FontAwesomeIcon
              icon={faCircleXmark}
              style={{ color: "#ff0000", marginRight: "4px", }}
            />
            Close account
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;