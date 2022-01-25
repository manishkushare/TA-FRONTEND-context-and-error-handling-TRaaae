import React from "react";
import { ModeContext } from "./ModeContext";
export default function SwitchButton({ isDarkMode, changeMode }) {
  const mode= React.useContext(ModeContext);
  return (
    <button
      className={`btn ${mode.isDarkMode ? "btn-dark" : "btn-light"}`}
      onClick={mode.changeMode}
    >
      {mode.isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
    </button>
  );
}
