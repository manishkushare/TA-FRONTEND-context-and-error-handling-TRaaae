import React, { useContext } from "react";
import { ModeContext } from "./ModeContext";
function Title({ text, isDarkMode }) {
  const mode = useContext(ModeContext);
  return (
    <h2
      className={`heading ${
        mode.isDarkMode ? "sub-heading-dark" : "sub-heading-light"
      }`}
    >
      {text}
    </h2>
  );
}

export default Title;
