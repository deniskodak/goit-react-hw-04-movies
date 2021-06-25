import React, { Component } from "react";
// import "./HomePage.module.css";

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
        <section>
          <h1>Trending today</h1>
          {movies && (
            <ul>
              {movies.map(({ id, original_title }) => (
                <li key={id}>{original_title}</li>
              ))}
            </ul>
          )}
        </section>
      </>
    );
  }
}

export default HomePage;
