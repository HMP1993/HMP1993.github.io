import React, { Fragment } from "react";
import Banner from "../../assets/top-view-green-leaf-dolma-with-seasonings-dark-surface.jpg";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Bison</h1>
        <HeaderCartButton/>
        
      </header>
      <div className={classes["main-image"]}>
        <img src={Banner} alt="cover img" />
      </div>
    </Fragment>
  );
};
export default Header;
