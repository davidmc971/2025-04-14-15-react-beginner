const initialMovies = [
  { id: 0, title: "Avengers", description: "A cool movie!", rating: 5.0 },
  { id: 1, title: "Pulp Fiction", description: "A cool movie!", rating: 5.0 },
  { id: 2, title: "Star Wars", description: "A cool movie!", rating: 5.0 },
  { id: 3, title: "Indiana Jones", description: "A cool movie!", rating: 5.0 },
  { id: 4, title: "Inception", description: "A cool movie!", rating: 5.0 },
];

let movies = initialMovies.slice();

export function getMovies() {
  return movies;
}

export function deleteMovie(id) {
  movies = movies.filter(m => m.id != id);
  return movies;
}