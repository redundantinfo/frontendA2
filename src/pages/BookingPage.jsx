/*
This page will render the BookingForm component and display the BookingConfirmation component after completing the booking.
*/

import React from 'react';
import { useParams } from 'react-router-dom';

function BookingPage() {
  const { id } = useParams();

  // Fetch movie details based on the ID
  // Use the "id" parameter to fetch the appropriate movie details

  return (
    <div>
      <h2>Booking Page</h2>
      <p>Movie ID: {id}</p>
      {/* Add the booking form */}
    </div>
  );
}

export default BookingPage;