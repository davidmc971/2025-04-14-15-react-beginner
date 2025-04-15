export default function MovieItemElement({ movie }) {
  return (
    <p>
      {movie.title} - {movie.description} - {movie.rating}
    </p>
  );
}