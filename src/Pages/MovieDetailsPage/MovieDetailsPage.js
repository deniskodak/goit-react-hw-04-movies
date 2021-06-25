import React, { Component } from "react";

import ApiService from "../../ApiService/ApiService";
const apiService = new ApiService();

class MovieDetailsPage extends Component {
  state = {
    movie: {},
  };
  async componentDidMount() {
    const movie = await apiService.getMovieById(508943);
    this.setState({ movie });
  }
  render() {
    const { movie } = this.state;

    return (
      <>
        <h1> {movie.original_title}</h1>
        <p>User score: {movie.vote_average}</p>
      </>
    );
  }
}

export default MovieDetailsPage;
