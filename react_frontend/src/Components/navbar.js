import React  from 'react';
import { NavLink, useLocation,useNavigate} from 'react-router-dom';
const Navbar = () =>{
    const location = useLocation();
    console.log(location);
    const navigate = useNavigate();
    function clicked(){
        localStorage.removeItem("token");
        navigate("/login")
    }
    if(location.pathname !== "/login"){
        return(
            <div className="navbar">
                 <div className="tabbar">
                 <NavLink  to="/create">Create Surveys</NavLink>
                 <NavLink  to="/my_surveys">My Surveys</NavLink>
                 </div>
                 <div className='logout-div'>
                     <button className='logout' onClick={clicked}>Log Out</button>
                 </div>
                    
            </div>
         )
    }
    
}
export default Navbar;