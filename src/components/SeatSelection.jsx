/*
This component will display a graphic view of the auditorium and allow users to select available seats for a specific screening. 
It will receive the screening ID and fetch the seat availability data from the backend API.
The component should handle seat selection and calculate the total price based on the number of visitors and ticket prices for different age groups.
*/
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getSeats } from '../services/api';

// use getSeats to fetch the seat data from the backend API, display the seat data in a table, and allow users to select seats.