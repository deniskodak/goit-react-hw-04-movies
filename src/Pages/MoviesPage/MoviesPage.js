import React, { Component } from "react";

import MoviesList from "../../Components/MoviesList";
import Form from "../../Components/Form";
import styles from "./MoviesPage.module.css";

import ApiService from "../../ApiService/ApiService";
const apiService = new ApiService();

class MoviesPage extends Component {
  state = {
    movies: [],
    page: 1,
  };

  componentDidMount() {
    const { location } = this.props;

    if (location.search) {
      this.getMovies(location.search);
    }
  }

  getMovies = async (keyword) => {
    const { location } = this.props;
    location.search = keyword;

    const movies = await apiService.getMoviesByQuery(keyword);
    this.setState({ movies });
  };

  render() {
    const { movies } = this.state;

    return (
      <section className={styles.section}>
        <Form onSubmit={this.getMovies} />

        {movies && movies.length > 0 && <MoviesList movies={movies} />}
      </section>
    );
  }
}

export default MoviesPage;
