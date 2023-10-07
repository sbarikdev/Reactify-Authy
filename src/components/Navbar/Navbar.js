import React, { useEffect, useState } from 'react'
import { Link,useLocation, useNavigate } from "react-router-dom";
import { axiosInstance } from '../../constant';
import './Navbar.css';

const Navbar = () => {

  const [cart, setCart] = useState([])
  const cartLength = cart.length;

    let navigate=useNavigate();
    
    const handleLogout=()=>{
      localStorage.removeItem('token');
      navigate('/login');
    }
    const location = useLocation();

    useEffect(() => {
      axiosInstance.get('/cart')
      .then((res)=>{
          console.log(res)
          setCart(res.data.data)
      }
      )
    }, []);

  return (
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
                    <li><a href="/productlist">Product</a></li>
                    <li><a href="/category">Category</a></li>
                    <li><a href="/cart">Cart: {cartLength}</a></li>
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
};



export default Navbar



