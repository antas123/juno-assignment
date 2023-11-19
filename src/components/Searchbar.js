import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faChevronDown,
  faCancel,
} from "@fortawesome/free-solid-svg-icons";
import "../App.css";
import Dropdown from "./Dropdown";

const Searchbar = ({
  setUser,
  searchedUser,
  setSortConfigIsClear,
  isClearSortConfigButtonVisible,
}) => {
  const [isShow, setIsShow] = useState(false);

  function handleShow() {
    setIsShow(!isShow);
  }

  return (
    <>
    <div style={{width:"100%",height:"0", border:"1px solid #c4dfdf", marginTop:"-23px", zIndex:"-1"}}/>
    <div className="search-bar-container-main">
      <div className="search-bar-container">
        <FontAwesomeIcon icon={faSearch} className="search-icon" />
        <input
          type="text"
          placeholder="Search"
          className="search-input"
          value={searchedUser}
          onChange={(e) => setUser(e.target.value)}
        />
      </div>
      <button
        onClick={handleShow}
        className="btn-1"
        style={{
          backgroundColor: "#F5F5F5",
          borderRadius: "7px",
          color: "grey",
          fontWeight: "600",
          border: "none",
          cursor:"pointer"
        }}
      >
        Trigger reasons{"  "}
        <FontAwesomeIcon
          icon={faChevronDown}
          style={{ color: "#9a9a9a", marginLeft: "3px" }}
        />
      </button>
      {isShow ? (
        <div style={{ position: "absolute", top: "140px", right: "600px" }}>
          <Dropdown />
        </div>
      ) : null}
      <button
      className="btn-2"
        style={{
          backgroundColor: "#F5F5F5",
          borderRadius: "7px",
          color: "grey",
          fontWeight: "600",
          border: "none",
          cursor:"pointer"
        }}
      >
        Risk level{"  "}
        <FontAwesomeIcon
          icon={faChevronDown}
          style={{ color: "#9a9a9a", marginLeft: "3px" }}
        />
      </button>
      <div style={{ marginLeft: "auto" }}>
        {!isClearSortConfigButtonVisible && (
          <button
            style={{
              marginTop: "20px",
              backgroundColor: "pink",
              borderColor: "red",
              borderWidth: "2px",
              height: "40px",
              padding: "8px 16px 8px 16px",
              borderRadius: "7px",
              fontWeight: "600",
            }}
            onClick={() => setSortConfigIsClear(true)}
          >
            Reset all sorts{" "}
            <FontAwesomeIcon
              icon={faCancel}
              style={{ color: "#9a9a9a", marginLeft: "3px" }}
            />
          </button>
        )}
      </div>
    </div>
    </>
  );
};

export default Searchbar;