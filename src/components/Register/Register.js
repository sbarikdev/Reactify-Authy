import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { API_URL } from '../../constant/index';
import './Register.css';

const Register = (props) => {
  const [credentials,setCredentials] = useState({mobile_number:"",password:""})
let navigate = useNavigate();
  
    const handleSubmit= async(e)=>{
        e.preventDefault();
        const response = await fetch(`${API_URL}login`, {
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
<div class="containerLogin">
  <div class="card">
    <h2>Register Form</h2>
    <form onSubmit={handleSubmit}>
      <label for="fullname">Full Name</label>
      <input type="text" id="fullname" placeholder="Enter your full name"/>

      <label for="email">Email</label>
      <input type="email" id="email" placeholder="Enter your email"/>

      <label for="new-password">New Password</label>
      <input type="password" id="new-password" placeholder="Enter your new password"/>

      <button type="submit">Register</button>
    </form>
    <div class="switch">Already have an account? <a href="/login">Login here</a></div>
  </div>
</div>

  )
}

export default Register



