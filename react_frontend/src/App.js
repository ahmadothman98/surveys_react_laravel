import React  from 'react';
import './style.css';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Login_form from './pages/login.js';
import Create from './pages/create';
import MySurveys from './pages/my_surveys';
import Navbar from './Components/navbar';

// var page_value = 0;
// const changePage = (page) => {
//   page_value = page;
// }
function App() {
  return (
    <div className='app'>
      <Router>
      <Navbar/>
        <Routes>
            <Route  exact path = "/login" element={<Login_form />} />
            <Route exact path = "/create" element={<Create />} />
            <Route exact path='/my_surveys' element={<MySurveys />} /> 
        </Routes>
    </Router>
    </div>
  );
}
export default App;
