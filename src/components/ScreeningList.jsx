// ALL API calls should be made using the functions in src\services\api.js.

/*
ScreeningList: Displays a list of screenings, sorted by date, and includes date, time, movie details, and available seats.

1. Get screenings (assuming this fetch also includes auditorium data)
2. Sort by date
3. Display date and weekday
4. Display time, title, movie poster and length (in hours and minutes) of the movie

*/

import React, { useEffect, useState } from 'react';

function ScreeningList({ movieId }) {
  const [screenings, setScreenings] = useState([]);

  useEffect(() => {
    // Fetch screenings for the specific movie from the backend API
    fetch(`/api/screenings_overview `) // Replace with the correct API endpoint
      .then((response) => response.json())
      .then((data) => setScreenings(data));
  }, [movieId]);

  return (
    <div>
      <h2>Screenings</h2>
      <ul>
        {screenings.map((screening) => (
          <li key={screening.id}>
            <p>Time: {screening.screeningTime}</p>
            <p>Title: {screening.movie}</p>
            <p>Auditorium: {screening.auditorium}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ScreeningList;
