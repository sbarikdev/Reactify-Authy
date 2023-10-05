import React, { useState } from 'react';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";

import './App.css';
import Dashboard from './components/Dashboard/Dashboard';
import Navbar from './components/Navbar/Navbar';
import Alert from './components/Alert';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Category from './components/Category/category';
import CategoryDetails from './components/Category/CategoryDetails';
import AddCategory from './components/Category/AddCategory';
import EditCategory from './components/Category/editCategory';
import ProductList from './components/Product/ProductList';
import ProductDetail from './components/Product/ProductDetail';
import CartDetails from './components/Cart/Cart';
// import Cart from './components/cart';

function App() {
  const[alert, setAlert]= useState(null);
  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
}

  return (
    <div className="wrapper">
    <Router>
    <Navbar/>
    <Alert alert={alert}/>
    <div className='container'>
     <Routes>
     <Route exact path="/" element={<Dashboard showAlert={showAlert}/>}/>
     <Route exact path="/addcategory" element={<AddCategory showAlert={showAlert}/>}/>
     <Route exact path="/editcategory/:id" element={<EditCategory showAlert={showAlert}/>}/>
     <Route exact path="/category" element={<Category showAlert={showAlert}/>}/>
     <Route exact path="/category/:id" element={<CategoryDetails showAlert={showAlert}/>}/>
     <Route exact path="/productlist" element={<ProductList showAlert={showAlert}/>}/>
     <Route exact path="/productdetail/:id" element={<ProductDetail showAlert={showAlert}/>}/>
     <Route exact path="/cart" element={<CartDetails showAlert={showAlert}/>}/>
     <Route exact path="/login" element={<Login showAlert={showAlert}/>}/>
     <Route exact path="/register" element={<Register showAlert={showAlert}/>}/>
    </Routes>
    </div>
    </Router>
    </div>
  );
}

export default App;