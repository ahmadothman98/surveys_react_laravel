import React,{useState} from 'react';


const Create = () =>{
    const [title, setTitle] = useState("");
    return(
        <div>
            <h1>Create new surveys!</h1>
            <form>
                <p>Survey Title</p>
                <input type="text"
                value ={title}
                onChange = {(e)=>{
                    setTitle(e.target.value);
                }}
                />
            </form>
        </div>
    )
}




export default Create;