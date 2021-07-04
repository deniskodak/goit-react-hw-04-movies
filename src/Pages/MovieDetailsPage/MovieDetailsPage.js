import React, { Component } from "react";
import styles from "./MovieDetailsPage.module.css";

import ButtonGoBack from "../../Components/ButtonGoBack";
import MoviesAdditionalBox from "../../Components/MoviesAdditionalBox/MoviesAdditionalBox";

import ApiService from "../../ApiService/ApiService";
const apiService = new ApiService();

class MovieDetailsPage extends Component {
  state = {
    movie: {},
    location: null,
  };

  async componentDidMount() {
    const location = this.props.location?.state?.from;

    const { movieId } = this.props.match.params;
    const movie = await apiService.getMovieById(movieId);
    this.setState({ movie, location });
  }

  handleGoBack = () => {
    const { history } = this.props;
    const { location } = this.state;

    return history.push(location);
  };

  render() {
    const { movie, location } = this.state;
    const {
      original_title,
      release_date,
      overview,
      genres,
      vote_average,
      poster_path,
      credits,
      reviews,
    } = movie;

    const movieLength = Object.keys(movie).length;

    return (
      <section className={styles.section}>
        {location && <ButtonGoBack goBack={this.handleGoBack} />}

        {movieLength !== 0 && (
          <>
            <div className={styles.postcard}>
              <img
                src={`http://image.tmdb.org/t/p/w300/${poster_path}`}
                alt={`${original_title} poster`}
              />

              <div className={styles.postcard__info}>
                <h1 className={styles.title}>
                  {original_title} ({Number.parseInt(release_date)})
                </h1>

                <p className={styles.votes}>User score: {vote_average}</p>

                <h2 className={styles.title}>Overview</h2>

                {overview ? (
                  <p className={styles.overview}>{overview}</p>
                ) : (
                  <p className={styles.overview}>Comming soon...</p>
                )}

                <h2 className={styles.title}>Genres</h2>
                <ul className={styles.genres__list}>
                  {genres.map((genre) => (
                    <li className={styles.genres__item} key={genre.id}>
                      {genre.name}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <MoviesAdditionalBox credits={credits} reviews={reviews} />
          </>
        )}
      </section>
    );
  }
}
export default MovieDetailsPage;
