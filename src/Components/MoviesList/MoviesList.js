import React from "react";
import { withRouter, NavLink } from "react-router-dom";
import styles from "./MoviesList.module.css";
import routes from "../../routes";
import PropTypes from "prop-types";

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
          className={styles.link}
        >
          {original_title}
        </NavLink>
      </li>
    ))}
  </ul>
);

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      original_title: PropTypes.string.isRequired,
    })
  ).isRequired,
  location: PropTypes.object.isRequired,
};
export default withRouter(MoviesList);
