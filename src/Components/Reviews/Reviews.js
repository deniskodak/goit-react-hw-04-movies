import React from "react";
import styles from "./Reviews.module.css";

const Reviews = ({ reviews: { results } }) => {
  return (
    <ul className={styles.list}>
      {results.map((review) => (
        <li key={review.id} className={styles.item}>
          <p className={styles.title}>author: {review.author}</p>
          <p className={styles.content}>{review.content}</p>
        </li>
      ))}
    </ul>
  );
};

export default Reviews;
