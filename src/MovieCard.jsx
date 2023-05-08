import React from "react";

const MovieCard = ({ movie }) => {
  return (
    <div className="movie">
      <div>
        <p>{movie.y}</p>
      </div>

      <div>
        <img src={movie.i.imageUrl} alt={movie.l} />
      </div>

      <div>
        <span>{movie.qid}</span>
        <h3>{movie.l}</h3>
      </div>
    </div>
  );
};

export default MovieCard;
