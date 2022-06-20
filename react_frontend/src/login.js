import React  from 'react';
import { useState } from 'react';
import axios from 'axios';

const Login_form = (props)=>{
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
        var setLocation = props.setLocation;
        setLocation('hey');
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
        </div>
    )
  
}

export default Login_form;