import { Link } from "react-router-dom";


const AllTrips = ({ trips, title}) => {


    return ( 
        <div className="alltrips-list content">
         
            {trips.map((trip) => (
            <div className="trip-preview" key={trip.id}>
               <Link to={`/trips/${trip.id}`}>
               <img src={`https://megan-bailey.com/img/getawayv1-img/${trip.id}.jpg`} alt={trip.title} className="gallery-img"/>    
               <h3>{trip.title}</h3>
                {/* <p className="author">Created by: {trip.author}</p> */}
                <p className="continent">{trip.continent}</p>
               </Link>
            </div>
        ))}
        </div>
     );
}
 
export default AllTrips;