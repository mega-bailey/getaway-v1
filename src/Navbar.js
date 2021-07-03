import {Link} from 'react-router-dom'; 

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>Getaway</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/alltrips">See All Trips</Link>
                <Link to="/add">Add a Trip</Link>
            </div>
        </nav>
     );
}
 
export default Navbar;