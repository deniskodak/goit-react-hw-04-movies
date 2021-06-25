import "./App.css";
import HomePage from "./Pages/HomePage/HomePage";
import MovieDetailsPage from "./Pages/MovieDetailsPage/MovieDetailsPage";
import MoviesPage from "./Pages/MoviesPage/MoviesPage";

function App() {
  return (
    <>
      <header className="header-section">
        <ul className="site-nav__list">
          <li className="site-nav__item">Home</li>
          <li className="site-nav__item"> Movies</li>
        </ul>
      </header>

      <HomePage />
      <MoviesPage />
      <MovieDetailsPage />
    </>
  );
}

export default App;
