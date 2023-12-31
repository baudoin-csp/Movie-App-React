import { Layout, Space } from "antd";

import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MovieList from "./components/MovieList";
import MovieListHeading from "./components/MovieListHeading";
import SearchBox from "./components/SearchBox";
import AddFavourite from "./components/AddFavourite";
import RemoveFavourite from "./components/RemoveFavourite";
import WelcomeMessage from "./components/WelcomeMessage";

function App() {
  const { Header, Content } = Layout;

  const headerStyle = {
    textAlign: "center",
    color: "#fff",
    height: 100,
    paddingInline: 50,
    lineHeight: "100px",
    backgroundColor: "#141414",
  };

  const contentStyle = {
    textAlign: "center",
    minHeight: 120,
    color: "#fff",
    backgroundColor: "#141414",
  };

  const [movies, setMovies] = useState([]);
  const [favourites, setFavourites] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  const getMovieRequest = async (searchValue) => {
    if (searchValue !== "") {
      console.log("search value: " + searchValue);
      const url = `https://www.omdbapi.com/?s=${searchValue}&apikey=b7c390a`;
      const response = await fetch(url);
      const responseJson = await response.json();
      if (responseJson.Search) {
        setMovies(responseJson.Search);
      }
    } else {
      setMovies([]);
    }
  };

  useEffect(() => {
    getMovieRequest(searchValue);
  }, [searchValue]);

  useEffect(() => {
    const movieFavourites = JSON.parse(
      localStorage.getItem("react-movie-app-favourites")
    );
    if (movieFavourites) {
      setFavourites(movieFavourites);
    }
  }, []);

  const saveToLocalStorage = (items) => {
    localStorage.setItem("react-movie-app-favourites", JSON.stringify(items));
  };

  const addFavouriteMovie = (movie) => {
    if (!favourites.includes(movie)) {
      const newFavourites = [...favourites, movie];
      setFavourites(newFavourites);
      saveToLocalStorage(newFavourites);
    }
  };

  const removeFavouriteMovie = (favouriteMovie) => {
    const newFavourites = favourites.filter(
      (movie) => movie !== favouriteMovie
    );
    setFavourites(newFavourites);
    saveToLocalStorage(newFavourites);
  };

  return (
    <>
      <Space direction="vertical" style={{ width: "100%" }} size={[0, 48]}>
        <Layout>
          <Header style={headerStyle}>
            <MovieListHeading />
            <SearchBox setSearchValue={setSearchValue} />
          </Header>
          <Content style={contentStyle}>
            {movies.length === 0 && favourites.length === 0 && (
              <WelcomeMessage />
            )}
            {movies.length !== 0 && (
              <div className="movie-list-heading">Movies</div>
            )}
            <MovieList
              movies={movies}
              handleFavouritesClick={addFavouriteMovie}
              favouriteComponent={AddFavourite}
            />
            {favourites.length !== 0 && (
              <div className="favourite-list-heading">Favourites</div>
            )}
            <MovieList
              movies={favourites}
              handleFavouritesClick={removeFavouriteMovie}
              favouriteComponent={RemoveFavourite}
            />
          </Content>
        </Layout>
      </Space>
    </>
  );
}

export default App;
