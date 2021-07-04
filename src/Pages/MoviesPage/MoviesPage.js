import React, { Component } from "react";

import MoviesList from "../../Components/MoviesList";
import Form from "../../Components/Form";
import styles from "./MoviesPage.module.css";

import ApiService from "../../ApiService/ApiService";
const apiService = new ApiService();

class MoviesPage extends Component {
  state = {
    keyword: "",
    movies: [],
    page: 1,
  };

  componentDidMount() {
    const { location } = this.props;

    if (location.search) {
      this.setState({ keyword: location.search.substring(1) });
    }
  }
  async componentDidUpdate(prevProps, prevState) {
    if (prevState.keyword !== this.state.keyword) {
      this.getMovies();
    }
  }

  getMovies = async () => {
    const { keyword } = this.state;
    const movies = await apiService.getMoviesByQuery(keyword);
    this.setState({ movies }, this.saveQueryInLocation());
  };
  getKeyword = async (keyword) => {
    this.setState({ keyword });
  };

  saveQueryInLocation = () => {
    const { keyword } = this.state;
    const { location } = this.props;
    location.search = keyword;
  };

  render() {
    const { movies, keyword } = this.state;

    return (
      <section className={styles.section}>
        <Form onSubmit={this.getKeyword} />
        {keyword && (
          <h2 className={styles.title}>
            Вот что мы нашли по запросу: {keyword}{" "}
          </h2>
        )}
        {movies.length > 0 && <MoviesList movies={movies} />}
      </section>
    );
  }
}

export default MoviesPage;
