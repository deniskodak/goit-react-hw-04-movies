import React from "react";
import Navigation from "../Navigation";
import styles from "./AppBar.module.css";

const AppBar = () => (
  <header className={styles.header__section}>
    <Navigation />
  </header>
);

export default AppBar;
