import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { API_URL } from '../../constant/index';
// import './login.css';

const Login = (props) => {
  const [credentials,setCredentials] = useState({country_code:"+91",mobile_number:"",password:""})
let navigate = useNavigate();
  
    const handleSubmit= async(e)=>{
        e.preventDefault();
        const {country_code,mobile_number,password} = credentials;
        const response = await fetch(`${API_URL}login`, {
            method: "POST", 
            headers: {
              'Content-Type': 'application/json'
              
            },
            body: JSON.stringify({country_code,mobile_number,password})
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

    <div class="containerLogin">
      <div class="card">
        <h2>Login Form</h2>
        <form onSubmit={handleSubmit}>
          <label for="email">Email</label>
          <input type="text" className="form-control" value={credentials.mobile_number} onChange={onChange} id="mobile_number" name="mobile_number" aria-describedby="emailHelp" placeholder="Enter your Email"/>

          <label for="password">Password</label>
          <input type="password" id="password" name="password" className="form-control" value={credentials.password} onChange={onChange} placeholder="Enter your password"/>

          <button type="submit">Login</button>
        </form>
        <div class="switch">Don't have an account? <a href="/register">Register here</a></div>
      </div>
    </div>

  )
}

export default Login



