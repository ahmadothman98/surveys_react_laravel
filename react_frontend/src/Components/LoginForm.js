import './../style.css';

function LoginForm(){
    return(
      <div className="form">
        <form>
          <div className="input-container">
            <label>Email </label>
            <input type="email" id="email" className='email' required />
          </div>
          <div className="input-container">
            <label>Password </label>
            <input type="password" id="password" className='password' required />
          </div>
          <div className="button-container">
            <input type="submit" className='submit' />
          </div>
        </form>
      </div>
    );
}

export default LoginForm;
