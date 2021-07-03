import Navbar from './Navbar';
import Home from './Home';
import Add from './Add';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AllTrips from './AllTrips';
import TripDetails from './TripDetails';


function App() {
  return (
   <Router>
    <div className="App">
      <Navbar/>
      <div className="content">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/add">
            <Add />
          </Route>
          <Route path="/all">
            <AllTrips />
          </Route>
          <Route path="/trips/:id">
            <TripDetails />
          </Route>
        </Switch>
      </div>
    </div>
  </Router>
  );
}

export default App;
