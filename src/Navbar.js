const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>Getaway</h1>
            <div className="links">
                <a href="/">Home</a>
                <a href="/add">Add a Trip</a>
                <a href="/all">See All Trips</a>
            </div>
        </nav>
     );
}
 
export default Navbar;