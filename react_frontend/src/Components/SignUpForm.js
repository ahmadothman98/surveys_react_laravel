import setPage from './../App';
import './../style.css';

function SignUpForm(props){
    return(
      <div>
        <h2>Welcome to SurveyMaker</h2>
        <form className='login-form'>
          <div className="input-div">
            <label>Email </label>
            <input type="email" id="email" className='email' placeholder='example@email.com' required />
          </div>
          <div className="input-div">
            <label>Password </label>
            <input type="password" id="password" className='password' required />
          </div>
          <div className="input-div">
            <label>Confirm Password </label>
            <input type="password" id="password_confirm" className='password' required />
          </div>
          <div className="button-div">
            <input type="submit" className='submit' value={'Sign Up'}/>
          </div>
          <div>Already have an account? <a href='#' onClick={click}>Login</a></div>
        </form>
      </div>
    );
    function click(){
      props.func(1);
      console.log('click')
    }
}

export default SignUpForm;
