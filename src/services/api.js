/*
Handle API requests using the Fetch API
*/

export async function getSeats() {
  const response = await fetch("/api/seats");
  const data = await response.json();
  return data;
}

export async function getSeatById(id) {
  const response = await fetch(`/api/seats/${id}`);
  const data = await response.json();
  return data;
}

// Add more API functions for seat availability, booking, etc.