import React, { useState, useEffect } from "react";

import MovieCard from "./MovieCard";

import "./App.css";

import SearchIcon from "./search.svg";

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": process.env.REACT_APP_X_RapidAPI_Key,
    "X-RapidAPI-Host": process.env.REACT_APP_X_RapidAPI_Host,
  },
};

const movie1 = {
  i: {
    height: 1000,
    imageUrl:
      "https://m.media-amazon.com/images/M/MV5BZWQxMjcwNjItZjI0ZC00ZTc4LWIwMzItM2Q0YTZhNzI3NzdlXkEyXkFqcGdeQXVyMTA0MTM5NjI2._V1_.jpg",
    width: 706,
  },
  id: "tt2705436",
  l: "Italian Spiderman",
  q: "short",
  qid: "short",
  rank: 40077,
  s: "David Ashby, Chris Asimos",
  y: 2007,
};

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const searchMovies = async (title) => {
    const response = await fetch(
      "https://online-movie-database.p.rapidapi.com/auto-complete?q=" + title,
      options
    );
    const data = await response.json();
    console.log(data);

    const filteredMovies =
      data.d && data.d.filter((movie) => movie.i && movie.i.imageUrl !== null);
    setMovies(filteredMovies);
  };
  useEffect(() => {
    searchMovies("Hunter x Hunter");
  }, []);

  return (
    <div className="app">
      <h1>MovieLand</h1>
      <div className="search">
        <input
          placeholder="Search for movies"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <img
          src={SearchIcon}
          alt="search"
          onClick={() => searchMovies(searchTerm)}
        />
      </div>

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
    </div>
  );
};

export default App;
