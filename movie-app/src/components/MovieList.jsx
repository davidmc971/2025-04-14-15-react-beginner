import { useState } from "react";
import { addMovie, deleteMovie, getMovies } from "../dataHandler";

export default function MovieList() {
  const [movies, setMovies] = useState(getMovies());

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

  return (
    <>
      <button onClick={handleAddMovie}>Add movie</button>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            <p>
              {movie.title} - {movie.description} - {movie.rating}
            </p>
            <button onClick={() => handleDelete(movie.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </>
  );
}
