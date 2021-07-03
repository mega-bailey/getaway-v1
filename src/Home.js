import AllTrips from './AllTrips';
import useFetch from "./useFetch";

const Home = () => {
// const [name, setName] = useState('Stranger'); 
// const handleClick = () => {
//     setName('yourname')
// }

const {data: trips, isPending, error} = useFetch('http://localhost:8000/trips');


    return ( 
        <div className="home">
            <h2>Home Page</h2>
            <h1>Getaway</h1>
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