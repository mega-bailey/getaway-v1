import { Link } from "react-router-dom";
import Italy from './imgs/main-italy.jpg';

const AllTrips = ({ trips, title}) => {

    return ( 
        <div className="trip-list">
            <h2>{title}</h2>
            {trips.map((trip) => (
            <div className="trip-preview" key={trip.id}>
               <Link to={`/trips/${trip.id}`}>
               <img src={Italy} alt="Pragser Wildsee, Italy by Ales Krivec" className="gallery-img"/>    
               <h2>{trip.title}</h2>
                <p>Created by: {trip.author}</p>
               </Link>
            </div>
        ))}
        </div>
     );
}
 
export default AllTrips;