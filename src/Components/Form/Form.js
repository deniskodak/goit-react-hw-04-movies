import React, { Component } from "react";
import styles from "./Form.module.css";

class Form extends Component {
  state = {
    value: "",
  };

  handleChange = (e) => {
    const value = e.target.value;
    this.setState({ value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
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

export default Form;
