import { useHistory, useParams } from "react-router-dom";
import useFetch from "./useFetch";

const TripDetails = () => {
    const {id} = useParams();
    const {data: trip, isPending, error } = useFetch('http://localhost:8000/trips/' + id);
    const history = useHistory();

    const handleClick = () => {
        fetch('http://localhost:8000/trips/' + trip.id, {
            method: 'DELETE'
        }).then(() => {
            history.push('/alltrips');
        })
    }

    return ( 
        <div className="trip-details">
            {isPending && <div>Loading...</div>}
            {error && <div>{error}</div>}
            { trip && (
                <article>
                    <h1>{trip.title}</h1>
                    <h2>{trip.continent}</h2>
                    <p>Added by: {trip.author}</p>
                    <div>{trip.body}</div>
                    <div className="trip-details-img"></div>
                    <button onClick={handleClick}>Delete Trip</button>
                </article>
            )}

        </div>
     );
}
 
export default TripDetails;