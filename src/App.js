import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import Add from './Add';
import All from './All';
import TripDetails from './TripDetails';
import NotFound from './NotFound';



function App() {
  return (
   <Router>
    <div className="App">
    <Navbar/>
      <div className="">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/add">
            <Add />
          </Route>
          <Route path="/all">
            <All />
          </Route>
          <Route path="/trips/:id">
            <TripDetails />
          </Route>
          <Route path="*">
            <NotFound/>
          </Route>
        </Switch>
      </div>
    </div>
  </Router>
  );
}

export default App;
