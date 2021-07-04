import React from "react";
import { NavLink } from "react-router-dom";
import routes from "../../routes";
import styles from "./Navigation.module.css";

const Navigation = () => (
  <nav>
    <ul className={styles.list}>
      <li className={styles.item}>
        <NavLink
          to={routes.home}
          exact
          className={styles.link}
          activeClassName={styles.link__active}
        >
          home
        </NavLink>
      </li>
      <li className={styles.item}>
        <NavLink
          to={routes.movies}
          className={styles.link}
          activeClassName={styles.link__active}
        >
          movies
        </NavLink>
      </li>
    </ul>
  </nav>
);

export default Navigation;
