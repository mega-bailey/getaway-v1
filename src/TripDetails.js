import { useHistory, useParams } from "react-router-dom";
import useFetch from "./useFetch";

const TripDetails = () => {
    const {id} = useParams();
    const {data: trip, isPending, error } = useFetch('https://my-json-server.typicode.com/mega-bailey/getaway-api-server/trips' + id);
    const history = useHistory();

    const handleClick = () => {
        fetch('https://my-json-server.typicode.com/mega-bailey/getaway-api-server/trips' + trip.id, {
            method: 'DELETE'
        }).then(() => {
            history.push('/all');
        })
    }

    return ( 
        <div className="trip-details content">
            {isPending && <div>Loading...</div>}
            {error && <div>{error}</div>}
            { trip && (
                <article >
                    <h1 >{trip.title}</h1>
                    <h2 >{trip.continent}</h2>
                    <p>Added by: {trip.author}</p>
                    <div>{trip.details}</div>
                    {/* <div className="trip-details-img"></div> */}
                    <button onClick={handleClick}>Delete Trip</button>
                </article>
            )}

        </div>
     );
}
 
export default TripDetails;