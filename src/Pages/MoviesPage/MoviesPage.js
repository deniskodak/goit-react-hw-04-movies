import styles from "./MoviesPage.module.css";
import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import ApiService from "../../ApiService/ApiService";
const apiService = new ApiService();

class MoviesPage extends Component {
  state = {
    value: "",
    movies: [],
    page: 1,
  };

  handleChange = (e) => {
    const value = e.target.value;
    this.setState({ value });
  };
  handleSubmit = async (e) => {
    e.preventDefault();
    const { value } = this.state;

    const movies = await apiService.getMoviesByQuery(value);
    this.setState({ movies, value: "" });
  };
  render() {
    const { value, movies } = this.state;
    const { match } = this.props;

    return (
      <>
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

        {movies && movies.length > 0 && (
          <ul className={styles.list}>
            {movies.map(({ id, original_title }) => (
              <li key={id}>
                <NavLink to={`${match.url}/${id}`}>{original_title}</NavLink>
              </li>
            ))}
          </ul>
        )}
      </>
    );
  }
}

export default MoviesPage;
