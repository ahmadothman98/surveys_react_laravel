import './style.css';
import logo from './logo.svg';
import { useState } from 'react';

import Login_form from './login.js'
import SurveyMaker from './survey.js'

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
    return <SurveyMaker />
  }
  if(location=== 'login'){
    return <Login_form setLocation={setLocation} />;
  }



}
export default App;
