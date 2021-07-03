import { Link } from "react-router-dom";

const NotFound = () => {
    return ( 
        <div className="not-found">
            <h2>Oops!</h2>
            <p>Page could not be found</p>
            <Link to="/">On to the Home Page</Link>
        </div>
     );
}
 
export default NotFound;