import React, { useState, useEffect } from 'react';

function MovieList() {
  const [screenings, setScreenings] = useState([]);
  const [movies, setMovies] = useState([]);
  const [sortOption, setSortOption] = useState('title'); // Default sorting option

  useEffect(() => {
    fetch('/api/screenings')
      .then(response => response.json())
      .then(data => {
        setScreenings(data);
      })
      .catch(error => {
        console.error('Error fetching screenings:', error);
      });

    fetch('/api/movies')
      .then(response => response.json())
      .then(data => {
        setMovies(data);
      })
      .catch(error => {
        console.error('Error fetching movies:', error);
      });
  }, []);

  const sortedMovies = movies.slice().sort((a, b) => {
    const aValue = sortOption === 'description.length'
      ? a.description.length
      : sortOption === 'description.categories'
      ? a.description.categories.join(', ')
      : a[sortOption];

    const bValue = sortOption === 'description.length'
      ? b.description.length
      : sortOption === 'description.categories'
      ? b.description.categories.join(', ')
      : b[sortOption];

    if (typeof aValue === 'string' && typeof bValue === 'string') {
      return aValue.localeCompare(bValue);
    } else {
      return aValue - bValue;
    }
  });

  return (
    <div>
      <h2>Sort By:</h2>
      <select value={sortOption} onChange={e => setSortOption(e.target.value)}>
        <option value="title">Title</option>
        <option value="description.length">Description Length</option>
        <option value="description.categories">Categories</option>
        {/* Add more options as needed */}
      </select>

      <h2>Movies:</h2>
      <ul>
        {sortedMovies.map(movie => (
          <li key={movie.id}>
            <img src={'https://cinema-rest.nodehill.se' + movie.description.posterImage} alt={movie.title} />
            <p>Title: {movie.title}</p>
            <p>Description Length: {movie.description.length}</p>
            <p>Categories: {movie.description.categories.join(', ')}</p>
          
            {/* Display screening data for this movie */}
            <ul>
              {screenings
                .filter(screening => screening.movieId === movie.id)
                .map(screening => (
                  <li key={screening.id}>
                    <p>Screening at: {screening.time}</p>
                    <p>In auditorium: {screening.auditoriumId}</p>
                  </li>
                ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MovieList;
