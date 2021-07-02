import { useState, useEffect } from "react";
import AllTrips from './AllTrips';

const Home = () => {
// const [name, setName] = useState('Stranger'); 
// const handleClick = () => {
//     setName('yourname')
// }
const [trips, setTrips] = useState(null); 
const [isPending, setIsPending] = useState(true);
const [error, setError] = useState(null);

useEffect(() => {
    fetch('http://localhost:8000/trips')
    .then(res => {
        if(!res.ok){
            throw Error('Could not fetch data');
        }
        return res.json()
    })
    .then(data => {
       setTrips(data);
       setIsPending(false);
       setError(null);
    })
    .catch(err => {
        setIsPending(false);
        setError(err.message);
    })
}, []);

    return ( 
        <div className="home">
            <h2>Home Page</h2>
            <h1>Getaway</h1>
            {/* <p>{name}</p> */}
       <h2>Share your trips with others and gather inspiration for your next getaway.</h2>
       {isPending && <div>Loading...</div>}
       {trips && <AllTrips trips={trips} title="All Trips"/> } {/* props */}
       {error && <div>{error}</div>}
        {/* <button onClick={() => setName('me')}>change name</button>
 <p>{name}</p> */}
        </div>
     );
}
 
export default Home;