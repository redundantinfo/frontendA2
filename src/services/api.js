/*
Handle API requests using the Fetch API
*/

const BASE_URL = 'https://api.example.com';

export async function fetchMovies() {
  const response = await fetch(`${BASE_URL}/movies`);
  const data = await response.json();
  return data;
}

export async function fetchScreenings(movieId) {
  const response = await fetch(`${BASE_URL}/movies/${movieId}/screenings`);
  const data = await response.json();
  return data;
}

// Add more API functions for seat availability, booking, etc.