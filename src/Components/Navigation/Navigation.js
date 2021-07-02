import React from "react";
import { NavLink } from "react-router-dom";
import routes from "../../routes";
import styles from "./Navigation.module.css";

const Navigation = () => (
  <nav className={styles.list}>
      <NavLink
        to={routes.home}
        className={styles.link}
        activeClassName={styles.link__active}
      >
        home
      </NavLink>
      <NavLink
        to={routes.movies}
        className={styles.link}
        activeClassName={styles.link__active}
      >
        movies
      </NavLink>
  </nav>
);

export default Navigation;
