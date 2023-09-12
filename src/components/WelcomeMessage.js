import React from "react";

const WelcomeMessage = () => {
  const headingStyle = {
    fontFamily: "Futura",
    fontWeight: "bold",
  };

  const italicStyle = {
    fontFamily: "Futura",
    fontWeight: "bold",
    fontStyle: "italic",
  };

  const titleStyle = {
    fontFamily: "Futura",
    fontWeight: "bold",
    fontSize: "24px",
    marginBottom: "0px",
  };

  const textStyle = {
    fontFamily: "Futura",
    fontSize: "18px",
  };

  return (
    <div className="welcome-message">
      <h1 style={headingStyle} className="welcome-message-title">
        Welcome to Cinematica
      </h1>
      <h3 style={italicStyle} className="welcome-message-description">
        With Cinematica, you can easily discover and explore your favorite
        movies.
      </h3>
      <div className="welcome-message-divider">
        <p style={titleStyle}>Search for Movies</p>
        <p style={textStyle}>
          Looking for a specific movie? Simply enter the title in the search
          bar, and we'll provide you with a list of matching results.
        </p>
        <div className="add-favourite-movie-section">
          <p style={titleStyle}>Add to Your Favorites</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill="red"
            className="bi bi-heart-fill"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
            />
          </svg>
        </div>
        <p style={textStyle}>
          Found a movie you love? Add it to your Favorites page to keep track of
          your must-watch films. Your Favorites list is your personalized movie
          library, ready for you to enjoy whenever you want.
        </p>
      </div>
    </div>
  );
};

export default WelcomeMessage;
