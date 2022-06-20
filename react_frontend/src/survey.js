import React  from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from "./Components/navbar";
import Create from './create';
const Surveys = (props) =>{

    
    return(
        <Router>
            <Navbar setLocation = {props.setLocation}/>
            <Routes>
                <Route exact path = "/create" element={<Create />} />
                <Route exact path='/my_surveys'> 

                </Route>
            </Routes>
        </Router>
    )
}
export default Surveys;