import logo from './logo.svg';
import './App.css';
import LoginForm from './Components/LoginForm';
import SignUpForm from './Components/SignUpForm';
var page_value = 0;
const changePage = (page) => {
  page_value = page;
}
function App() {
  return (
    <div className='app'>
    {
      <LoginForm />
    /* {page_value === 0?<SignUpForm func={changePage}/> :<LoginForm />} */}
    </div>
  );
}



export default App;
