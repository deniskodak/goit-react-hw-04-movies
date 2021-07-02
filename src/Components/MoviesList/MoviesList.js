import React from "react";
import { withRouter, NavLink } from "react-router-dom";
import styles from "./MoviesList.module.css";
import routes from "../../routes";

const MoviesList = ({ movies, location }) => (
  <ul className={styles.list}>
    {movies.map(({ id, original_title }) => (
      <li key={id}>
        <NavLink
          to={{
            pathname: `${routes.movies}/${id}`,
            state: {
              from: location,
            },
          }}
        >
          {original_title}
        </NavLink>
      </li>
    ))}
  </ul>
);

export default withRouter(MoviesList);
