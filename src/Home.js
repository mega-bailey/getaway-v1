import { useState } from "react";

const Home = () => {
// const [name, setName] = useState('Stranger'); 

// const handleClick = () => {
//     setName('luigi')
// }
const [trips, setTrips] = useState([
    { title: 'The Title 1', body: 'alsdjfas;ldfjas;ldfjas;dlkjf', author: 'me', id:'1'},
    { title: 'The Title 2', body: 'alsdjfas;ldfjas;ldfjas;dlkjf', author: 'you', id:'2'},
    { title: 'The Title 3', body: 'alsdjfas;ldfjas;ldfjas;dlkjf', author: 'him', id:'3'},
])

    return ( 
        <div className="home">
            <h2>Home Page</h2>
            <h1>Getaway</h1>
            {/* <p>{name}</p> */}
       <h2>Share your trips with others and gather inspiration for your next getaway.</h2>
        {trips.map((trip) => (
            <div className="trip-preview" key={trip.id}>
                <h2>{trip.title}</h2>
                <p>Created by: {trip.author}</p>
            </div>
        ))}

        </div>
     );
}
 
export default Home;