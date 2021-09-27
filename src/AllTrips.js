import { Link } from "react-router-dom";


const AllTrips = ({ trips, title}) => {


    return ( 
        <div className="trip-list content">
            <h2>{title}</h2>
            {trips.map((trip) => (
            <div className="trip-preview" key={trip.id}>
               <Link to={`/trips/${trip.id}`}>
               <img src={`https://megan-bailey.com/img/getawayv1-img/${trip.id}.jpg`} alt={trip.title} className="gallery-img"/>    
               <h2>{trip.title}</h2>
                <p className="author">Created by: {trip.author}</p>
               </Link>
            </div>
        ))}
        </div>
     );
}
 
export default AllTrips;