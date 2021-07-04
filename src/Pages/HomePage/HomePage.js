import React, { Component } from "react";

import MoviesList from "../../Components/MoviesList";
import styles from "./HomePage.module.css";

import ApiService from "../../ApiService/ApiService";
const apiService = new ApiService();

class HomePage extends Component {
  state = {
    movies: [],
  };
  async componentDidMount() {
    const movies = await apiService.getTrends();

    this.setState({ movies });
  }

  render() {
    const { movies } = this.state;

    return (
      <>
        <section className={styles.section}>
          <h1 className={styles.title}>Trending today</h1>

          {movies && <MoviesList movies={movies} />}
        </section>
      </>
    );
  }
}

export default HomePage;
