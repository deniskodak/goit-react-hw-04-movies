import React from "react";
import styles from "./ButtonGoBack.module.css";

const ButtonGoBack = ({ goBack }) => (
  <button type="button" onClick={goBack} className={styles.btn}>
    Go Back
  </button>
);

export default ButtonGoBack;
