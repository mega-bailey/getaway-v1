const AllTrips = ({ trips, title}) => {
    // const trips = props.trips; 
    // const title = props.title; 


    return ( 
        <div className="trip-list">
            <h2>{title}</h2>
            {trips.map((trip) => (
            <div className="trip-preview" key={trip.id}>
                <h2>{trip.title}</h2>
                <p>Created by: {trip.author}</p>
            </div>
        ))}
        </div>
     );
}
 
export default AllTrips;