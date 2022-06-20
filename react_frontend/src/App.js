import logo from './logo.svg';
import './App.css';
import './style.css';
import { useState } from 'react';
import axios from 'axios';
// var page_value = 0;
// const changePage = (page) => {
//   page_value = page;
// }
function App() {
  return (
    <div className='app'>
      <Login_form />
    </div>
  );
}
const Login_form = ()=>{
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const login=(e)=>{
    e.preventDefault()
    var data = new FormData();
    data.append("email",email);
    data.append("password",password);
    axios({
      method:"post",
      url: "http://127.0.0.1:8000/api/login",
      data: data
    }).then(function (response){
      localStorage.setItem('token',response.data['access_token'])
    })
  }




  return(  
    <div>
      <h2>Welcome to SurveyMaker</h2>
      <form className='login-form' onSubmit={login}>
        <div className="input-div">
          <label>Email </label>
          <input type="email" id="email" className='email'
          onChange={e=>setEmail(e.target.value)} required />
        </div>
        <div className="input-div">
          <label>Password </label>
          <input type="password" id="password" className='password'
          onChange={e=>setPassword(e.target.value)} required />
        </div>
        <div className="button-div">
          <input type="submit" className='submit' value={'Login'}/>
        </div>
      </form>
    </div>)

}
export default App;
