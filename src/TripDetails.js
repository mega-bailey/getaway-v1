import { useParams } from "react-router-dom";
import useFetch from "./useFetch";

const TripDetails = () => {
    const {id} = useParams();
    const {data: trip, isPending, error } = useFetch('http://localhost:8000/trips/' + id);

    return ( 
        <div className="trip-details">
            {isPending && <div>Loading...</div>}
            {error && <div>{error}</div>}
            { trip && (
                <article>
                    <h2>{trip.title}</h2>
                    <p>Added by: {trip.author}</p>
                    <div>{trip.body}</div>
                </article>
            )}

        </div>
     );
}
 
export default TripDetails;