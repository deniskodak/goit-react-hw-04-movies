import React from "react";
import styles from "./ButtonGoBack.module.css";
import PropTypes from "prop-types";

const ButtonGoBack = ({ goBack }) => (
  <button type="button" onClick={goBack} className={styles.btn}>
    Go Back
  </button>
);

ButtonGoBack.propTypes = {
  goBack: PropTypes.func.isRequired,
};

export default ButtonGoBack;
