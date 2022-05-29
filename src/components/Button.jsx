import React, { useContext } from "react";
import ThemeContext from "../content/ThemeContext";

const Button = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div>
      <h1> Active Theme - {theme}</h1>
      <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        {" "}
        theme
      </button>
    </div>
  );
};

export default Button;
