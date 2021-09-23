import AllTrips from './AllTrips';
import useFetch from "./useFetch";
import React from 'react';
import Hawaii from './imgs/main-hawaii.jpg';
import Italy from './imgs/main-italy.jpg';
import Jordan from './imgs/main-jordan.jpg';

const Home = () => {

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
                <div>
                <h1>Getaway</h1>
                <h2>Share your trips with others and gather inspiration for your next getaway</h2>
                </div>
                {error && <div>{error}</div>}
                {isPending && <div>Loading...</div>}
                <h3 className="mt-2">Featured Trips</h3>
                {trips && <AllTrips trips={trips.filter((trip) => trip.featured === 'featured')} /> } 
                
            </div>
        </div>
     );
}
 
export default Home;