import React  from 'react';
import {Link} from 'react-router-dom';

const Navbar = (props) =>{
    
    function clicked(){
        localStorage.removeItem('token')
        const setLocation = props.setLocation;
        setLocation('login');
    }

    return(
       <div className="navbar">
            <div>
            <Link to="/create">Create Surveys</Link>
            <Link to="/my_surveys">My Surveys</Link>
            </div>
            
            <div>
                <button onClick={clicked}>Log Out</button>
            </div>
       </div>
    )
}
export default Navbar;