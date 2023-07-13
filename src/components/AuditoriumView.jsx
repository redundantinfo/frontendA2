/*
This component will display a graphic view of the auditorium and allow users to select available seats for a specific screening. 
It will receive the screening ID and fetch the seat availability data from the backend API.
The component should handle seat selection and calculate the total price based on the number of visitors and ticket prices for different age groups.
*/
// ALL API calls should be made using the functions in src\services\api.js..

/*

1. Fetch the seat data from the backend API
2. Display the seat data as buttons in a table. The table should always be 10 columns, the amount of rows will depend on total seat amount. 
3. It should be possible to select a seat by clicking on it. The seat should be highlighted when selected.
4. Depending on the amount of visitors, the user should be able to select multiple seats. The seats should always be adjacent to each other.
5. The user should be able to deselect a seat by clicking on it again.
6. The user should be able to see the total price for the selected seats.
7. There should be a button to confirm the seat selection. When the button is clicked, the user should be redirected to the booking confirmation page.

*/

import React from 'react';

function AuditoriumView({ auditorium }) {
  // Generate the seat numbers based on the number of seats in the auditorium
  const seatNumbers = Array.from({ length: auditorium.numberOfSeats }, (_, index) => index + 1);

  return (
    <div>
      <h2>Auditorium: {auditorium.name}</h2>
      <div className="auditorium-view">
        {seatNumbers.map((seatNumber) => (
          <div key={seatNumber} className="seat">{seatNumber}</div>
        ))}
      </div>
    </div>
  );
}

export default AuditoriumView;