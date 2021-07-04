import React, { Component } from "react";
import styles from "./Form.module.css";
import PropTypes from "prop-types";

class Form extends Component {
  state = {
    value: "",
  };

  handleChange = (e) => {
    const value = e.target.value;
    this.setState({ value });
  };

  handleSubmit = (e) => {
    const { value } = this.state;
    e.preventDefault();

    if (!value) {
      return;
    }

    this.props.onSubmit(this.state.value);
  };

  render() {
    const { value } = this.state;

    return (
      <form onSubmit={this.handleSubmit} className={styles.form}>
        <label className={styles.label}>
          <input
            className={styles.input}
            type="text"
            value={value}
            onChange={this.handleChange}
            placeholder="Find movie..."
          />
        </label>
        <button className={styles.btn} type="submit">
          Search
        </button>
      </form>
    );
  }
}

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
export default Form;
