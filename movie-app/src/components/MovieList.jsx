import { useState } from "react";
import { deleteMovie, getMovies } from "../dataHandler";

export default function MovieList() {
  const [movies, setMovies] = useState(getMovies());

  const handleDelete = (id) => {
    setMovies(deleteMovie(id));
  };

  return (
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
  );
}
