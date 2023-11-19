import React from "react";
import "../App.css";

const Dropdown = ({ onHover }) => {
  const optionsList = [
    "Hard flag",
    "Temp flag",
    "Restricted flag",
    "un flag",
    "Reviewed",
  ];

  return (
    <div>
      <div className="dropdown">
        <ul className="menu-open">
          {optionsList.map((item, index) => {
            return (
              <li className="item" key={index}>
                {item}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Dropdown;