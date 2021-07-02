import React, { Component } from "react";
import styles from "./MovieDetailsPage.module.css";

import { NavLink, Route } from "react-router-dom";

import Cast from "../../Components/Cast";
import Reviews from "../../Components/Reviews";
import ButtonGoBack from "../../Components/ButtonGoBack";

import ApiService from "../../ApiService/ApiService";
const apiService = new ApiService();

class MovieDetailsPage extends Component {
  state = {
    original_title: null,
    release_date: null,
    overview: null,
    genres: null,
    vote_average: null,
    poster_path: null,
    credits: null,
    reviews: null,
  };

  async componentDidMount() {
    const { movieId } = this.props.match.params;
    const movie = await apiService.getMovieById(movieId);
    this.setState({ ...movie });
  }

  handleGoBack = () => {
    const { history, location } = this.props;
    return history.push(location?.state?.from);
  };

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
        {this.props.history.action === "PUSH" && (
          <ButtonGoBack goBack={this.handleGoBack} />
        )}

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

              {credits && (
                <Route
                  path={`${match.path}/cast`}
                  render={(props) => <Cast {...props} acters={credits} />}
                />
              )}
              {reviews && (
                <Route
                  path={`${match.path}/reviews`}
                  render={(props) => <Reviews {...props} reviews={reviews} />}
                />
              )}
            </div>
          </>
        )}
      </>
    );
  }
}
export default MovieDetailsPage;
