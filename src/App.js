import { Route, Switch, Redirect } from "react-router-dom";
import { lazy, Suspense } from "react";
import routes from "./routes";

import AppBar from "./Components/AppBar/AppBar";
import ContainerWithLoader from "./Components/Loader/Loader";

const HomePage = lazy(
  () => import("./Pages/HomePage") /* webpackChunkName: "HomePage" */
);
const MovieDetailsPage = lazy(
  () =>
    import(
      "./Pages/MovieDetailsPage"
    ) /* webpackChunkName: "MovieDetailsPage" */
);
const MoviesPage = lazy(
  () => import("./Pages/MoviesPage") /* webpackChunkName: "MoviesPage" */
);

function App() {
  return (
    <>
      <AppBar />
      <Suspense fallback={<ContainerWithLoader />}>
        <Switch>
          <Route exact path={routes.home} component={HomePage} />
          <Route path={routes.movieDetails} component={MovieDetailsPage} />
          <Route path={routes.movies} component={MoviesPage} />
          <Redirect to={routes.home} />
        </Switch>
      </Suspense>
    </>
  );
}

export default App;
