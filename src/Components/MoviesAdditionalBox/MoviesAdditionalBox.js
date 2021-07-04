import React from "react";
import PropTypes from "prop-types";

import Cast from "../Cast";
import Reviews from "../Reviews";

import { NavLink, Route, withRouter } from "react-router-dom";
import styles from "./MoviesAdditionalBox.module.css";

const MoviesAdditionalBox = ({ match, credits, reviews }) => {
  return (
    <div className={styles.additional_box}>
      <h2 className={styles.additional_title}>Additional information</h2>
      <ul>
        <li>
          <NavLink
            to={`${match.url}/cast`}
            className={styles.link}
            activeClassName={styles.link__active}
          >
            Cast
          </NavLink>
        </li>
        <li>
          <NavLink
            to={`${match.url}/reviews`}
            className={styles.link}
            activeClassName={styles.link__active}
          >
            Reviews
          </NavLink>
        </li>
      </ul>
      {credits && (
        <Route
          path={`${match.path}/cast`}
          render={(props) => <Cast {...props} acters={credits} />}
        />
      )}
      {reviews && (
        <Route
          path={`${match.path}/reviews`}
          render={(props) => <Reviews {...props} reviews={reviews} />}
        />
      )}
    </div>
  );
};

MoviesAdditionalBox.propTypes = {
  match: PropTypes.object.isRequired,
};

export default withRouter(MoviesAdditionalBox);
