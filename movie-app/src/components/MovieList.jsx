import { useState } from "react";
import { addMovie, deleteMovie, getMovies, rateMovie } from "../dataHandler";

export default function MovieList() {
  const [movies, setMovies] = useState(getMovies());
  const [movieIdToRate, setMovieIdToRate] = useState();
  const [editedMovieRating, setEditedMovieRating] = useState(0);

  const handleDelete = (id) => {
    setMovies(deleteMovie(id));
  };

  const handleAddMovie = () => {
    setMovies(
      addMovie({
        title: "New movie",
        description: "New description",
        rating: 0,
      })
    );
  };

  const handleRateMovie = (movie) => {
    setMovieIdToRate(movie.id);
    setEditedMovieRating(movie.rating);
  };

  const handleSubmitRating = (id) => {
    setMovies(rateMovie(id, editedMovieRating));
    setEditedMovieRating(0);
    setMovieIdToRate(undefined);
  };

  return (
    <>
      <button onClick={handleAddMovie}>Add movie</button>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            <p>
              {movie.title} - {movie.description} - {movie.rating}
            </p>
            {movieIdToRate === movie.id ? (
              <>
                <input
                  value={editedMovieRating}
                  onChange={(e) => setEditedMovieRating(e.target.value)}
                />
                <button onClick={() => handleSubmitRating(movie.id)}>
                  Submit rating
                </button>
              </>
            ) : (
              <button onClick={() => handleRateMovie(movie)}>Rate</button>
            )}

            <button onClick={() => handleDelete(movie.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </>
  );
}
