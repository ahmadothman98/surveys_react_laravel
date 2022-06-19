import './../style.css';

function LoginForm(){
    return(
      <div>
        <h2>Welcome to SurveyMaker</h2>
        <form className='login-form' onSubmit={login}>
          <div className="input-div">
            <label>Email </label>
            <input type="email" id="email" className='email' required />
          </div>
          <div className="input-div">
            <label>Password </label>
            <input type="password" id="password" className='password' required />
          </div>
          <div className="button-div">
            <input type="submit" className='submit' value={'Login'}/>
          </div>
        </form>
      </div>
    );
}
function login(){
    
}
export default LoginForm;
