// .src/containers/MoviesPage.js

import React from "react"
import { Route } from "react-router-dom"
import MoviesList from "../components/MoviesList"
import MovieShow from "../components/MovieShow"

const MoviesPage = ({ match, movies }) => (
  <div>
    <MoviesList movies={movies} />
    <Route
      exact
      path={match.url}
      render={() => <h2>Choose a movie from the list above</h2>} //👈 this <Route/> element acts as the nested version of a default route.
    />
    <Route
      path={`${match.url}/:movieID`} //👈We define the parameter names in a Route's path by prepending a colon (:) to the front of the name. This name will then show up as a key inside match.params.
      // component={<MovieShow movies={movies} />} ==>  This alone isn't enough for MovieShow to know WHICH movie it should display
      // use Route's RENDER prop, we can pass in a function that has access to information about the route itself. Rewrite:
      render={routerProps => <MovieShow {...routerProps} movies={movies} />}
    />
  </div>
)

export default MoviesPage
