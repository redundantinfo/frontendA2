// Your JSON data

// Function to render the sorted data
function renderSortedData(sortBy) {
  const sortedData = [...jsonData]; // Create a copy of the original data to avoid modifying it directly. Likely not needed since I am recieving the data from a service API function.

  // Custom sort function based on the selected option
  switch (sortBy) {
    case 'title':
      sortedData.sort((a, b) => a.title.localeCompare(b.title));
      break;
    case 'genre':
      sortedData.sort((a, b) => a.genre.localeCompare(b.genre));
      break;
    case 'duration':
      sortedData.sort((a, b) => parseTimeDuration(a.time_duration) - parseTimeDuration(b.time_duration));
      break;
    default:
      // If an invalid option is selected, sort by title as the default
      sortedData.sort((a, b) => a.title.localeCompare(b.title));
      break;
  }

  // Render the sorted data in the dataContainer
  const dataContainer = document.getElementById('dataContainer');
  dataContainer.innerHTML = '';

  sortedData.forEach(movie => {
    const movieElement = document.createElement('div');
    movieElement.innerHTML = `<strong>Title:</strong> ${movie.title}, <strong>Genre:</strong> ${movie.genre}, <strong>Duration:</strong> ${movie.time_duration}`;
    dataContainer.appendChild(movieElement);
  });
}

// Function to parse time duration into minutes
function parseTimeDuration(durationString) {
  const [hours, minutes] = durationString.split("h ").map(part => parseInt(part));
  return hours * 60 + minutes;
}

// Add event listener to the dropdown menu
const sortOption = document.getElementById('sortOption');
sortOption.addEventListener('change', function() {
  const selectedSortOption = sortOption.value;
  renderSortedData(selectedSortOption);
});

// Initially render the data sorted by title
renderSortedData('title');
