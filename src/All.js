import AllTrips from "./AllTrips";
import useFetch from "./useFetch";

const All = () => {

    const { data: trips, isPending, error } = useFetch('http://localhost:8000/trips');


    return ( 
        <div className="alltrips">
            <h2>All Trips</h2>
            {error && <div>{error}...</div>}
            {isPending && <div>Loading...</div>}
            {trips && <AllTrips trips={trips}  />}
        </div>
     );
}
 
export default All;