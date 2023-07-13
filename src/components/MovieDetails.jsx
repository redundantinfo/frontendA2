import React from 'react';
import { useParams } from 'react-router-dom';

function MovieDetails() {
  const { id } = useParams();

  // Fetch movie details based on the ID
  // Use the "id" parameter to fetch the appropriate movie details

  return (
    <div>
      <h2>Movie Details</h2>
      <p>Movie ID: {id}</p>
      {/* Display the movie details */}
    </div>
  );
}

export default MovieDetails;