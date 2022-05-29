import React, { useContext } from "react";
import Button from "./Button";
import Header from "./Header";
import ThemeContext from "../content/ThemeContext";

const Container = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`app ${theme === "dark" ? theme : ""}`}>
      <Header />
      <hr />
      <Button />
    </div>
  );
};

export default Container;
