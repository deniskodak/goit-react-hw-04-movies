import React from "react";
import styles from "./Cast.module.css";

const Cast = ({ acters: { cast } }) => {
  return (
    <ul className={styles.list}>
      {cast.map(({ id, character, original_name, profile_path }) => {
        return (
          <li key={id} className={styles.item}>
            <img
              src={`http://image.tmdb.org/t/p/w185/${profile_path}`}
              alt={original_name}
            />
            <p>{original_name}</p>
            <p>Character: {character}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default Cast;
