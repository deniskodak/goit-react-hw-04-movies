import React from "react";
import styles from "./Cast.module.css";
import PropTypes from "prop-types";

const Cast = ({ acters: { cast } }) => {
  return (
    <ul className={styles.list}>
      {cast.map(({ id, character, original_name, profile_path }) => {
        return (
          <li key={id} className={styles.item}>
            {profile_path && (
              <img
                src={`http://image.tmdb.org/t/p/w185/${profile_path}`}
                alt={original_name}
              />
            )}
            <p>{original_name}</p>
            <p>Character: {character}</p>
          </li>
        );
      })}
    </ul>
  );
};
Cast.defaultProps = {
  cast: [],
};

Cast.propTypes = {
  cast: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      character: PropTypes.string.isRequired,
      original_name: PropTypes.string.isRequired,
      profile_path: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Cast;
