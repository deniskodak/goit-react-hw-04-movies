import React, { Component } from "react";

import MoviesList from "../../Components/MoviesList";
import Form from "../../Components/Form";

import ApiService from "../../ApiService/ApiService";
const apiService = new ApiService();

class MoviesPage extends Component {
  state = {
    value: "",
    movies: [],
    page: 1,
  };

  getMovies = async (keyword) => {
    const movies = await apiService.getMoviesByQuery(keyword);
    this.setState({ movies });
  };

  render() {
    const { movies } = this.state;

    return (
      <>
        <Form onSubmit={this.getMovies} />

        {movies && movies.length > 0 && <MoviesList movies={movies} />}
      </>
    );
  }
}

export default MoviesPage;
