/*
Handle API requests using the Fetch API
*/

async function getMovies() {
  const response = await fetch("/api/movies");
  const data = await response.json();
  return data;
}

async function getScreenings() {
  const response = await fetch("/api/screenings");
  const data = await response.json();
  return data;
}

async function getScreeningView() {
  const response = await fetch("/api/screenings_overview");
  const data = await response.json();
  return data;
}

async function getSeats() {
  const response = await fetch("/api/seats");
  const data = await response.json();
  return data;
}

async function getSeatById(id) {
  const response = await fetch(`/api/seats/${id}`);
  const data = await response.json();
  return data;
}

// TODO: Add more API functions for seat availability, booking, etc.