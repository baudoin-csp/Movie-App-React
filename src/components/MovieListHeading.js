import React from "react";
import logo from '../Cinematica_logo_bg.png'

const MovieListHeading = () => {
  return (
    <div className="movie-list-heading">
      <img src={logo} className="movie-list-heading-logo"/>
    </div>
  );
};

export default MovieListHeading;
