import React from "react";

const Cast = ({ acters: { cast } }) => {
  console.log(cast);
  return (
    <ul>
      {cast.map(({ id, character, original_name, profile_path }) => {
        return (
          <li key={id}>
            <img
              src={`http://image.tmdb.org/t/p/w185/${profile_path}`}
              alt=""
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
