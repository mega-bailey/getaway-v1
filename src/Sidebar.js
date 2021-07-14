import {Link} from 'react-router-dom'; 

const Sidebar = () => {
    return ( 
        <div className="sidebar-div">
        <nav className="sidebar">
            <ul className="sidebar-nav">
            <div className="sidebar-links">
                <p>Europe</p>
                <p>Asia</p>
                <p>North America</p>
                <p>South America</p>
                <p>Oceania</p>
                <p>Africa</p>
                <p>Antarctica</p>
            </div>
            </ul>
        </nav>
        </div>
     );
}
 
export default Sidebar;