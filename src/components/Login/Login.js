import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = (props) => {
  const [credentials,setCredentials] = useState({mobile_number:"",password:""})
let navigate = useNavigate();
  
    const handleSubmit= async(e)=>{
        e.preventDefault();
        const response = await fetch("http://localhost:8000/login", {
            method: "POST", 
            headers: {
              'Content-Type': 'application/json'
              
            },
            body: JSON.stringify({mobile_number:credentials.mobile_number,password:credentials.password})
          });
          const json = await response.json();
          console.log(json);
          if(json.success){
            //save the auth token and redirect
            localStorage.setItem('token',json.authtoken);
            props.showAlert("Logged in Successfully" , "success");
            navigate("/");
            
            
          }
          else{
            alert("invalid credentials");
            // props.showAlert("invalid credentials" , "danger");
          }
    }
    const onChange=(e)=>{
        setCredentials({...credentials, [e.target.name]: e.target.value})
      }

  return (
    <div className='mt-3'>
      <h2 className='my-2'>Login to continue to iNotebook</h2>
      <form onSubmit={handleSubmit}>
  <div className="my-3">
    <label htmlFor="email" className="form-label">Email address</label>
    <input type="email" className="form-control" value={credentials.mobile_number} onChange={onChange} id="mobile_number" name="mobile_number" aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="password" className="form-label">Password</label>
    <input type="password" className="form-control" value={credentials.password} onChange={onChange} name="password" id="password"/>
  </div>
  <button type="submit" className="btn btn-primary" >Submit</button>
</form>
    </div>
  )
}

export default Login
