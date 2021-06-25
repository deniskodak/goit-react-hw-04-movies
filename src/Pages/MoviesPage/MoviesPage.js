import React, { Component } from "react";

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
    this.setState({ movies });
  };
  render() {
    const { value, movies } = this.state;
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <label>
            <input type="text" value={value} onChange={this.handleChange} />
          </label>
        </form>

        {movies && (
          <ul>
            {movies.map(({ id, original_title }) => (
              <li key={id}>{original_title}</li>
            ))}
          </ul>
        )}
      </>
    );
  }
}

export default MoviesPage;
