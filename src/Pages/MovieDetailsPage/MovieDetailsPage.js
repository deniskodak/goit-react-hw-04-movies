import React, { Component } from "react";
import styles from "./MovieDetailsPage.module.css";

import { NavLink, Route } from "react-router-dom";

import Cast from "../../Components/Cast";
import Reviews from "../../Components/Reviews";

import ApiService from "../../ApiService/ApiService";
const apiService = new ApiService();

class MovieDetailsPage extends Component {
  state = {
    original_title: null,
    release_date: null,
    overview: null,
    genres: null,
    vote_average: null,
    credits: null,
    reviews: null,
  };
  async componentDidMount() {
    const { movieId } = this.props.match.params;

    const movie = await apiService.getMovieById(movieId);
    this.setState({ ...movie });
  }
  render() {
    const {
      original_title,
      release_date,
      overview,
      genres,
      vote_average,
      poster_path,
      credits,
      reviews,
    } = this.state;
    const { match } = this.props;
    return (
      <>
        {original_title && (
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

            <div className={styles.additional_box}>
              <h2 className={styles.additional_title}>
                Additional information
              </h2>
              <ul>
                <li>
                  <NavLink
                    to={`${match.url}/cast`}
                    className={styles.link}
                    activeClassName={styles.link__active}
                  >
                    Cast
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={`${match.url}/reviews`}
                    className={styles.link}
                    activeClassName={styles.link__active}
                  >
                    Reviews
                  </NavLink>
                </li>
              </ul>
              <Route
                path="/movies/:movieId/cast"
                render={(props) => <Cast {...props} acters={credits} />}
              />
              <Route
                path="/movies/:movieId/reviews"
                render={(props) => <Reviews {...props} reviews={reviews} />}
              />
            </div>
          </>
        )}
      </>
    );
  }
}

export default MovieDetailsPage;
