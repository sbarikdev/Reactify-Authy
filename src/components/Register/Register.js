import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { API_URL } from '../../constant/index';
import './Register.css';

const Register = (props) => {
  const [credentials,setCredentials] = useState({country_code:"+91",mobile_number:"",password:""})
  let navigate = useNavigate();

  
    const handleSubmit= async(e)=>{
        e.preventDefault();
        var newPassword = document.getElementById("password").value;
        var confirmPassword = document.getElementById("confirm-password").value;
        
        if (newPassword !== confirmPassword) {
            alert("Passwords do not match. Please re-enter.");
            return false;
        }

        const {country_code,mobile_number,password} = credentials;
        const response = await fetch(`${API_URL}signup`, {
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
            // localStorage.setItem('token',json.authtoken);
            props.showAlert("Register in Successfully" , "success");
            navigate("/login");   
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

    
     <label htmlFor="country_code" className="form-label">country_code</label>
      <input type="text" className="form-control" id="country_code" name="country_code" value="+91" />

      <label htmlFor="mobile_number" className="form-label">mobile_number/ email</label>
      <input type="mobile_number" className="form-text" id="mobile_number" name="mobile_number" onChange={onChange} minLength={9} maxLength={10} placeholder="Enter your email/mobile_number"/>

      <label htmlFor="password" className="form-label">Password</label>
      <input type="password" className="form-control" id="password" name="password" onChange={onChange} minLength={6} maxLength={10} placeholder="Enter your password"/>

      <label for="new-password">Confirm Password</label>
      <input type="password" id="confirm-password" name="confirm-password" onChange={onChange} minLength={6} maxLength={10} placeholder="Enter your confirm password"/>

      <button type="submit">Register</button>
    </form>
    <div class="switch">Already have an account? <a href="/login">Login here</a></div>
  </div>
</div>
  )
}

export default Register



