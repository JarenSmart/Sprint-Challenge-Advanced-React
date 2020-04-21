import React from "react";
import DarkMode from "../hooks/DarkMode";

const ToggleDarkMode = () => {
  const [dark, setDark] = DarkMode(false);
  const toggleMode = (e) => {
    e.preventDefault();
    setDark(!dark);
  };

  return (
    <nav className="toggle-container">
      <span style={{ color: dark ? "yellow" : "grey", fontSize: 25 }}>☀︎</span>
      <div className="dark-mode-toggle">
        <div
          onClick={toggleMode}
          className={dark ? "toggle toggled" : "toggle"}
        ></div>
        <h6>{dark ? "Need Light?" : "Too Bright?"}</h6>
      </div>
      <span style={{ color: dark ? "grey" : "black", fontSize: 25 }}>☾</span>
    </nav>
  );
};

export default ToggleDarkMode;
