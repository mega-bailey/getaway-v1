import { useState } from "react";
import {useHistory} from 'react-router-dom';
import Hawaii from './imgs/main-hawaii.jpg';
import Italy from './imgs/main-italy.jpg';
import Jordan from './imgs/main-jordan.jpg';

const Add = () => {
    const [title, setTitle] = useState('');
    const [details, setDetails] = useState('');
    const [continent, setContinent] = useState('Europe');
    const [author, setAuthor] = useState('');
    const [isPending, setIsPending] = useState(false);
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        const trip = {title, details, continent, author};

        setIsPending(true);

        fetch('http://localhost:8000/trips', {
            method: 'POST',
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify(trip)
        }).then(() => {
            console.log('new trip added')
            setIsPending(false);
            history.push('/all')
        })
        }
    

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
        
        <div className="add">
            <h2>Add a New Trip</h2>
            <form onSubmit={handleSubmit}>
                <div className="add-title-continent">
                <label className="add-title">Trip Title:</label>
                <input 
                    type="text" 
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <label className="add-continent">Continent:</label>
                <select
                    value={continent}
                    onChange={(e) => setContinent(e.target.value)}
                >
                    <option value="Africa">Africa</option>
                    <option value="Europe">Europe</option>
                    <option value="Asia">Asia</option>
                    <option value="North America">North America</option>
                    <option value="South America">South America</option>
                    <option value="Oceania/Australia">Oceania/Australia</option>
                    <option value="Antarctica">Antarctica</option>
                </select>
                </div>
                <label>Trip Details:</label>
                <textarea 
                    required
                    value={details}
                    onChange={(e) => setDetails(e.target.value)}
                ></textarea>

                <label className="add-author">Author Name:</label>
                <input 
                    type="text" 
                    required
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                />
                
                {!isPending &&  <button>Add Trip</button>}
                {isPending &&  <button disabled>Adding Trip...</button>}
                <div className="mt-2"></div>
                <p> {title}</p>
                <p> {details}</p>
                <p> {continent}</p>
                <p> {author}</p>
            </form>
        </div>
        </div>
     );
}
 
export default Add;