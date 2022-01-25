import React from "react";
import { ModeContext } from "./ModeContext";
function Header({ isDarkMode }) {
  const mode = React.useContext(ModeContext);
  console.log(mode);
  return (
    <h1 className={`heading ${mode.isDarkMode ? "heading-dark" : "heading-light"}`}>
      {mode.isDarkMode ? "Dark Mode" : "Light Mode"}
    </h1>
  );
}

export default Header;
