import { useState } from "react";
import {useHistory} from 'react-router-dom';

const Add = () => {
    const [title, setTitle] = useState('');
    const [details, setDetails] = useState('');
    const [continent, setContinent] = useState('Europe');
    const [isPending, setIsPending] = useState(false);
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        const trip = {title, details, continent};

        setIsPending(true);

        fetch('http://localhost:8000/trips', {
            method: 'POST',
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify(trip)
        }).then(() => {
            console.log('new trip added')
            setIsPending(false);
            history.push('/alltrips')
        })
        }
    

    return ( 
        <div className="add">
            <h2>Add a New Trip</h2>
            <form onSubmit={handleSubmit}>
                <label>Trip Title:</label>
                <input 
                    type="text" 
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <label>Trip Details:</label>
                <textarea 
                    required
                    value={details}
                    onChange={(e) => setDetails(e.target.value)}
                ></textarea>
                <label>Continent:</label>
                <select
                    value={continent}
                    onChange={(e) => setContinent(e.target.value)}
                >
                    <option value="Africa">Africa</option>
                    <option value="Europe">Europe</option>
                    <option value="Asia">Asia</option>
                    <option value="North America">North America</option>
                    <option value="South America">South America</option>
                    <option value="Oceania">Oceania</option>
                    <option value="Antarctica">Antarctica</option>
                </select>
                {!isPending &&  <button>Add Trip</button>}
                {isPending &&  <button disabled>Adding Trip...</button>}
                
                <p> {title}</p>
                <p> {details}</p>
                <p> {continent}</p>
            </form>
        </div>
     );
}
 
export default Add;