import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import MovieDetails from './pages/MovieDetails';
import Booking from './pages/Booking';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={MovieList} />
        <Route exact path="/movies/:id" component={MovieDetails} />
        <Route exact path="/movies/:id/book" component={BookingPage} />
      </Switch>
    </Router>
  );
}

export default App;