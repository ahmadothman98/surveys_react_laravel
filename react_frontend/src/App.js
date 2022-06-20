import React  from 'react';
import './style.css';
import { useState } from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Login_form from './login.js'
import Surveys from './survey.js'

// var page_value = 0;
// const changePage = (page) => {
//   page_value = page;
// }
function App() {
  const [location,setLocation] = useState("login"); 
  return (
    <div className='app'>
      {checkLocation(location,setLocation)}
    </div>
  );
}
function checkLocation(location,setLocation){
  if(localStorage.getItem('token')){ 
    return <Surveys setLocation={setLocation} />
  }
  if(location=== 'login'){
    return <Login_form setLocation={setLocation} />;
  }



}
export default App;
