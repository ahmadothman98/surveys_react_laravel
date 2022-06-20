import React  from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from "./Components/navbar";
import Create from './create';
import MySurveys from './my_surveys';
const Surveys = (props) =>{

    
    return(
        <Router>
            <Navbar setLocation = {props.setLocation}/>
            <Routes>
                <Route exact path = "/create" element={<Create />} />
                <Route exact path='/my_surveys' element={<MySurveys />} /> 

            </Routes>
        </Router>
    )
}
export default Surveys;