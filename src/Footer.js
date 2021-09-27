import {Link} from 'react-router-dom'; 

const Footer = () => {
    return ( 
        <div className="footer">
        <Link to="/"> <h1 className="logo">Getaway</h1></Link>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/all">See All Trips</Link>
                <Link to="/add">Add a Trip</Link>
            </div>
            <p className="copyright">© 2021 Megan Bailey</p>
        </div>
     );
}
 
export default Footer;