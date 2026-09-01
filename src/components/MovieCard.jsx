import React from "react";
import "../styles.css";

function movieCard({ movie }) {
  const handleError = (e) => {
    e.target.src = "images/default.jpg";
  };

  const getRettingClass = (rating) => {
    if (rating >= 8) {
      return "rating-good";
    }

    if (rating >= 5 && rating < 8) {
      return "rating-ok";
    }

    return "rating-bad";
  };

  return (
    <div key={movie.id} className="movie-card">
      <img
        src={`images/${movie.image}`}
        alt={movie.title}
        onError={handleError}
      />
      <div className="movie-card-info">
        <h3 className="movie-card-title">{movie.title}</h3>
        <p className="movie-card-genre">{movie.genre}</p>
        <p className={`movie-card-rating ${getRettingClass(movie.rating)}`}>
          {movie.rating}
        </p>
      </div>
    </div>
  );
}

export default movieCard;
