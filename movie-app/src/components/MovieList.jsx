import { useState } from "react";
import { addMovie, deleteMovie, getMovies, rateMovie, updateMovie } from "../dataHandler";

export default function MovieList() {
  const [movies, setMovies] = useState(getMovies());
  const [movieIdToRate, setMovieIdToRate] = useState();
  const [editedMovieRating, setEditedMovieRating] = useState(0);
  const [movieIdToEdit, setMovieIdToEdit] = useState();

  const handleDelete = (id) => {
    setMovies(deleteMovie(id));
    if (movieIdToEdit === id) setMovieIdToEdit(undefined);
    if (movieIdToRate === id) setMovieIdToRate(undefined);
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

  const handleSubmitEdit = (movie) => {
    setMovies(updateMovie(movie));
    setMovieIdToEdit(undefined);
  }

  return (
    <>
      <button onClick={handleAddMovie}>Add movie</button>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            {movieIdToEdit === movie.id ? (
              <MovieItemEdit movie={movie} onSubmit={handleSubmitEdit} />
            ) : (
              <>
                <p>
                  {movie.title} - {movie.description} - {movie.rating}
                </p>
                <button onClick={() => setMovieIdToEdit(movie.id)}>Edit</button>
              </>
            )}

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

function MovieItemEdit(props) {
  const [title, setTitle] = useState(props.movie.title);
  const [description, setDescription] = useState(props.movie.description);

  const handleSubmit = () => props.onSubmit({
    ...props.movie,
    title,
    description
  });

  return (
    <>
      <label>Title</label>
      <input value={title} onChange={(e) => setTitle(e.target.value)} />
      <label>Description</label>
      <input
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button onClick={handleSubmit}>Submit edit</button>
    </>
  );
}
