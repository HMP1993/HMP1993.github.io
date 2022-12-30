import React, { Fragment } from "react";
import Banner from "../../assets/top-view-green-leaf-dolma-with-seasonings-dark-surface.jpg";
import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Salt</h1>
        <button type="submit">cart</button>
        
      </header>
      <div className={classes["main-image"]}>
        <img src={Banner} alt="cover img" />
      </div>
    </Fragment>
  );
};
export default Header;
