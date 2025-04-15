import { useState } from "react";
import { addMovie, getMovies } from "../dataHandler";
import MovieItemElement from "./MovieItemElement";
import MovieItemEdit from "./MovieItemEdit";

export default function MovieList() {
  const [movies, setMovies] = useState(getMovies());

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
          <MovieItemElement
            key={movie.id}
            setMovies={setMovies}
            movie={movie}
          />
        ))}
      </ul>
    </>
  );
}
