import React from 'react'
import { Link,useLocation, useNavigate } from "react-router-dom";
import './Navbar.css';

const Navbar = () => {
  let navigate=useNavigate();
  const handleLogout=()=>{
    localStorage.removeItem('token');
    navigate('/login');
  }
  const location = useLocation();

 
  return (
//     <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
//   <div className="container-fluid">
//     <Link className="navbar-brand" to="/">iNotebook</Link>
//     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//       <span className="navbar-toggler-icon"></span>
//     </button>
//     <div className="collapse navbar-collapse" id="navbarSupportedContent">
//       <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//         <li className="nav-item">
//           <Link className= {`nav-link ${location.pathname==="/"? "active": ""}` }aria-current="page" to="/">Home</Link>
//         </li>
//         <li className="nav-item">
//           <Link aria-current="page" to="/preferences">Preferences</Link>
//         </li>
//         <li className="nav-item">
//           <Link aria-current="page" to="/category">Category</Link>
//         </li>
//       </ul>
//       {!localStorage.getItem('token')?
//       <form className="d-flex" role="search">
//         <Link className="btn btn-primary mx-1" to="/login" role="button">Login |</Link>
//         <Link className="btn btn-primary mx-1" to="/signup" role="button">Signup</Link>
      
        

//       </form>:
//       <button onClick={handleLogout} className="btn btn-primary">Logout</button>
//       }
//     </div>
//   </div>
// </nav>
<div>

    <nav class="navbar">
        <div class="navbar-container container">
            <input type="checkbox" name="" id=""/>
            <div class="hamburger-lines">
                <span class="line line1"></span>
                <span class="line line2"></span>
                <span class="line line3"></span>
            </div>
            <ul class="menu-items">
                <li><a href="/">Home</a></li>
                <li><a href="/preferences">Preferences</a></li>
                <li><a href="/category">Category</a></li>
                <li><a href="#">Menu</a></li>
            {!localStorage.getItem('token')?
              <form className="d-flex" role="search">
                <li><a href="/login">Login</a></li>
              </form>:
              // <button onClick={handleLogout} className="btn btn-primary">Logout</button>
              <li><a onClick={handleLogout} href="">Logout</a></li>
              }
            </ul>
            <h1 class="logo">Navbar</h1>
        </div>
    </nav>
</div>
  )
}

export default Navbar



