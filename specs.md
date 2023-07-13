Users should be able to:

Get information about movies being shown, incl. dates and times.

Be able to see a list of screenings.
Screenings are sorted by the date they the movies are shown.
Each date displayed as a seperate headline (including date and weekday).
For each screening, the date and time of the screening and the title, movie poster and length (in hours and minutes) of the movie should be shown.

1. Get screenings (assuming this fetch also includes auditorium data)
2. Sort by date
3. Display date and weekday
4. Display time, title, movie poster and length (in hours and minutes) of the movie

You should be able to filter this list by category.

When you click on a movie in the list, you should be transfered to the booking page where you can choose your seats.

1. Redirect to booking page

The seats should be displayed as follows:
A graphic view of the auditorium and its seats.
The seats should be numbered from right to left, front to back. (The chair at the front right has the number 1. If the salon has 100 chairs, the one at the furthest back and to the left has the number 100.)

1. On page load, fetch auditorium data. This should include the number of rows and seats per row.
2. Display auditorium data as a grid of seats. With a seat number on each seat. Each row should have 10 seats.

While booking, you should be able to choose the number of visitors and see the total price.
Seniors (above the age of 65) and children (under the of 12) should have a lower ticket price.
The normal ticket price is SEK 85, seniors SEK 75, children SEK 65.

You should be able to see which seats are available and which are already booked.
You should be able to book a number of adjacent seats during a specific screening of a film.
If you are booking more than one seat, you should only be able to book seats that are next to each other. (You can’t book seat 1 and 3, but you can book 1 and 2.).
You should be able to see which seats you have chosen.
You should be able to change your mind and deselect a seat.

1. Dropdown to select number of visitors.
2. Check if any row has enough adjacent seats for the number of visitors.
3. If so, display the seats as selectable.
4. If not, display a message saying that there are no adjacent seats available for the number of visitors.

When you complete a booking, you should receive a unique booking number, as well as be able to see which row(s) and seats you have booked.
You shall get a ‘receipt’ with the total price, the date and time, all the seat numbers and booking number.
You pay when you arrive at the cinema and tell the staff your booking number.

A finished backend with a REST-api and a MySQL has already been provided.

The frontend should be built with:
React
React Router

Grades and requirements
Grade 3:

Make the list of screenings with sorting and filtering work.

Divide things into several different components.

Write a README-file in which you explain how you have divided into different component and what each component does

Use git and an open repository on GitHub. Turn in the link to your repository in Canvas!
