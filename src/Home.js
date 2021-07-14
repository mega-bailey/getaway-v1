import AllTrips from './AllTrips';
import useFetch from "./useFetch";
import React from 'react';
import Hawaii from './imgs/main-hawaii.jpg';
import Italy from './imgs/main-italy.jpg';
import Jordan from './imgs/main-jordan.jpg';

const Home = () => {
// const [name, setName] = useState('Stranger'); 
// const handleClick = () => {
//     setName('yourname')
// }

const {data: trips, isPending, error} = useFetch('http://localhost:8000/trips');


    return ( 
        <div>
            <div className="gallery">
                <figure className="gallery-item">
                    <img src={Italy} alt="Pragser Wildsee, Italy by Ales Krivec" className="gallery-img"/>
                </figure>
                <figure className="gallery-item">
                    <img src={Jordan} alt="Aqaba, Jordan by Juli Kosolapova" className="gallery-img" />
                </figure>
                <figure className="gallery-item">
                    <img src={Hawaii} alt="Maui, Hawaii by Ethan Robertson" className="gallery-img"/>
                </figure>
            </div>
        
            <div className="content welcome-text">
                <div className="text-center">
                <h1>Getaway</h1>
                <h2>Share your trips with others and gather inspiration for your next getaway</h2>
                </div>
                {isPending && <div>Loading...</div>}
                {trips && <AllTrips trips={trips} title="Featured Trips"/> } {/* props */}
                {error && <div>{error}</div>}
                    {/* <button onClick={() => setName('me')}>change name</button>
            <p>{name}</p> */}
            </div>
        </div>
     );
}
 
export default Home;