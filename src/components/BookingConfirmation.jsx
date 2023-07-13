// ALL API calls should be made using the functions in src\services\api.js.

/*
BookingConfirmation: Displays the booking details, including seat numbers and booking number.

1. User is redirected to the booking confirmation page after confirming the seat selection.
2. The booking confirmation page should display the booking number, selected seats, total price, and other relevant information.

*/

import React from 'react';

function BookingConfirmation({ bookingNumber, selectedSeats }) {
  return (
    <div>
      <h2>Booking Confirmation</h2>
      <p>Booking Number: {bookingNumber}</p>
      <p>Selected Seats: {selectedSeats.join(', ')}</p>
      {/* Add additional booking details */}
    </div>
  );
}

export default BookingConfirmation;