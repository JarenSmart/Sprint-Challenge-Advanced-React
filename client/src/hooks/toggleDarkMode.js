import React from "react";
import DarkMode from "./DarkMode";

const ToggleDark = () => {
  const [darkMode, setDarkMode] = DarkMode(false);
  const Toggle = (e) => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };

  return (
    <div>
      <nav>
        <div className="toggle-container">
          <button
            onClick={Toggle}
            className={darkMode ? "toggle-true" : "toggle-false"}
          >
            Toggle Mode
          </button>
        </div>
      </nav>
    </div>
  );
};

export default ToggleDark;
