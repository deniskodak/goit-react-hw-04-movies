import "./App.css";

import HomePage from "./Pages/HomePage";
import MovieDetailsPage from "./Pages/MovieDetailsPage";
import MoviesPage from "./Pages/MoviesPage";

import { NavLink, Route, Switch } from "react-router-dom";

function App() {
  return (
    <>
      <header className="header-section">
        <ul className="site-nav__list">
          <li className="site-nav__item">
            <NavLink
              to="/"
              className="site-nav__link"
              activeClassName="site-nav__link--active"
            >
              home
            </NavLink>
          </li>
          <li className="site-nav__item">
            <NavLink
              to="/movies"
              className="site-nav__link"
              activeClassName="site-nav__link--active"
            >
              movies
            </NavLink>
          </li>
        </ul>
      </header>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/movies/:movieId" component={MovieDetailsPage} />
        <Route path="/movies" component={MoviesPage} />
      </Switch>
    </>
  );
}

export default App;
