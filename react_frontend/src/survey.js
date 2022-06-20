
const SurveyMaker = (props) =>{
    function clicked(){
        localStorage.removeItem('token')
        var setLocation = props.setLocation;
        setLocation('login');
    }
    
    return(
        <div>
            <button onClick={clicked}>Log Out</button>
        </div>
    )
}
export default SurveyMaker;