import { useHistory, useParams } from "react-router-dom";
import useFetch from "./useFetch";
import {Link} from 'react-router-dom'; 


const TripDetails = () => {
    const {id} = useParams();
    const {data: trip, isPending, error } = useFetch('http://localhost:8000/trips/' + id);
    const history = useHistory();

    // const handleClick = () => {
    //     fetch('http://localhost:8000/trips/' + trip.id, {
    //         method: 'DELETE'
    //     }).then(() => {
    //         history.push('/all');
    //     })
    // }

    return ( 
        <div className="trip-details content">
            {isPending && <div>Loading...</div>}
            {error && <div>{error}</div>}
            { trip && (
                <article >
                    <h2 >{trip.title}</h2>
                    <h3 >{trip.continent}</h3>
                    <h4>Added by: {trip.author}</h4>
                    <div>{trip.details}</div>
                    {/* <div className="trip-details-img"></div> */}
                    {/* <button onClick={handleClick}>Delete Trip</button> */}
                    <Link to="/">Home</Link>
                    <Link to="/all">All Trips</Link>
                </article>
            )}

        </div>
     );
}
 
export default TripDetails;