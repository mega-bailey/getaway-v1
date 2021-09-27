import { useState } from "react";
import {useHistory} from 'react-router-dom';

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

        fetch('http://localhost:8000/trips/', {
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

      
        <div className="add content">
            <h2 className="page-title text-center">Add a New Trip</h2>
            <form onSubmit={handleSubmit}>
                
                <label >Trip Title:</label>
                <input 
                    type="text" 
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <label >Continent:</label>
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
                
                {!isPending &&  <button className="mt-2">Add Trip</button>}
                {isPending &&  <button disabled>Adding Trip...</button>}
                <div className="mt-3 mb-3"><hr/></div>
                <p> {title}</p>
                <p> {details}</p>
                <p> {continent}</p>
                <p> {author}</p>
            </form>
        </div>
        
     );
}
 
export default Add;