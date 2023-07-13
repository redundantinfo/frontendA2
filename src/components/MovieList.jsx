// ALL API calls should be made using the functions in src\services\api.js.

/*
MovieList: Displays a list of movies, including dates and times.

1. Fetch the movie data from the backend API
2. Display the movie data in a list. Each movie item should display the title, poster, and genres.
3. The movie list should be filterable by category. The user should be able to select one or more categories to filter the list.
4. The movie list should be sortable by title.
5. Each movie item should be a clickable link that redirects to the movie details page.

*/

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function MovieList() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    // Fetch movies from the backend API
    fetch('/api/movies') // Replace with the correct API endpoint
      .then((response) => response.json())
      .then((data) => setMovies(data));
  }, []);

  return (
    <div>
      <h2>Movies</h2>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MovieList;