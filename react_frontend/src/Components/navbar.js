import React  from 'react';
import {NavLink, useLocation} from 'react-router-dom';
import { Location } from 'react-router-dom';
const Navbar = () =>{
    const location = useLocation();
    console.log(location);
    
    function clicked(){
        localStorage.removeItem("token")
    }
    if(location.pathname !== "/login"){
        return(
            <div className="navbar">
                 <div>
                 <NavLink to="/create">Create Surveys</NavLink>
                 <NavLink to="/my_surveys">My Surveys</NavLink>
                 </div>
                 
                 <NavLink to="/login">
                     <button onClick={clicked}>Log Out</button>
                 </NavLink>
            </div>
         )
    }
    
}
export default Navbar;