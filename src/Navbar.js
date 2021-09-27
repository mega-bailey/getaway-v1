import {Link} from 'react-router-dom'; 

const Navbar = () => {
    return ( 
        <nav className="navbar">
           <Link to="/"> <h1 className="logo">Getaway</h1></Link>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/all">See All Trips</Link>
                <Link to="/add">Add A Trip</Link>
            </div>
        </nav>
     );
}
 
export default Navbar;