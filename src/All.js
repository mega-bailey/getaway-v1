import AllTrips from "./AllTrips";
import useFetch from "./useFetch";

const All = () => {

    const { data: trips, isPending, error } = useFetch('https://my-json-server.typicode.com/mega-bailey/getaway-api-server/trips/');


    return ( 
        <div className="alltrips content">
            <h2 class="text-center page-title">All Trips</h2>
            {error && <div>{error}...</div>}
            {isPending && <div>Loading...</div>}
            {trips && <AllTrips trips={trips}  />}
        </div>
     );
}
 
export default All;