import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import Add from './Add';
import All from './All';
import TripDetails from './TripDetails';
import NotFound from './NotFound';
import Footer from './Footer';



function App() {
  return (
   <Router>
    <div className="app">
    <Navbar/>
      <div className="main-content">
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
      <Footer/>
    </div>
  </Router>
  );
}

export default App;
