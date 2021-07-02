import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import React from "react";
import Loader from "react-loader-spinner";
import styles from "./Loader.css";

const ContainerWithLoader = () => (
  <div className={styles.loader__container}>
    <Loader
      type="Puff"
      color="#00BFFF"
      height={100}
      width={100}
      timeout={3000}
    />
  </div>
);

export default ContainerWithLoader;
