import React from "react";
import styles from "./Reviews.module.css";
import PropTypes from "prop-types";

const Reviews = ({ reviews: { results } }) => {
  return results.length > 0 ? (
    <ul className={styles.list}>
      {results.map((review) => (
        <li key={review.id} className={styles.item}>
          <p className={styles.title}>author: {review.author}</p>
          <p className={styles.content}>{review.content}</p>
        </li>
      ))}
    </ul>
  ) : (
    <h2>Sorry there is no reviews </h2>
  );
};

Reviews.defaultProps = {
  results: [],
};

Reviews.propTypes = {
  results: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      author: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    })
  ).isRequired,
};
export default Reviews;
