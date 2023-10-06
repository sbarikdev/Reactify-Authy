import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import { API_URL } from '../../constant/index';
import { axiosInstance } from '../../constant';
// import {addToCart} from '../Cart/Cart.js';
// import {
//     Container,
//     Input
// } from '@mantine/core';
import './ProductList.css';

const Detail = () => {
  const {id} = useParams();
  const [data,setData]=useState([]);
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');

  const FetchDetails = ()=>{
    axios.get(`${API_URL}product_list?cat_id=${selectedCategory}`).then((res)=>{
        setData(res.data.data)
        setProducts(res.data.data);
        setFilteredProducts(res.data.data);
    }).catch(err=>{
        console.log(err)
    })
  }
  useEffect(() => {
    FetchDetails();
  }, [selectedCategory]);

    //Product search
    const [searchTerm, setSearchTerm] = useState('');
    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
    };
    const filteredItems = data.filter((item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    //Product Filter
    const filterProductsByCategory = (category) => {
        if (category === 'all') {
          setFilteredProducts(products); // Show all products
        } else {
          setSelectedCategory(category);
        }
   
      };

  const addToCart = (product) => {
    axiosInstance.post('/cart', {
      product_id: product.id,
      quantity: 1,
    })
    .then((res)=>{
        console.log(res)
        alert("Product added to cart")
    }
    )
    .catch(err=>{
        console.log(err)
        alert("Product not added to cart")
    })



  };

  return (
    <body>
         <br></br><br></br><br></br>
    <header>
       
        <h1>Our Products</h1>
        <div class="search-bar">
            <input type="text" value={searchTerm} onChange={handleSearch} placeholder="Search products..."/>
            <button>Search</button>
        </div>
    </header>
    
        <aside class="filter">
            <h2>Filter</h2>
            <label for="category">Category:</label>
            <select id="category"
            value={selectedCategory}
            onChange={e => setSelectedCategory(e.target.value)}
            >
                <option value="">All</option>
                <option  value="3">Category 3</option>
                <option value="4">Category 4</option>
                
            </select>

        <label for="price-range">Price Range:      {selectedCategory}</label>
            <select id="price-range"> 
                <option value="all">All</option>
                <option value="0-50">$0 - $50</option>
                <option value="50-100">$50 - $100</option>
                
            </select>
        </aside>
        <main>
        <section class="product-list">
    
        {filteredItems.map((r,i)=>(
            <div>
            <Link to={{pathname: `/productdetail/${r.id}` }}><img src={r.image} width="100" height="60" alt="Product 1"/></Link>
            <h2>{r.name}</h2>
            <p>{r.description}</p>
            <p>Price: $ {r.price}</p>
            <button onClick={()=>addToCart(r)} >Add to Carts</button>
            </div>
        ))}
  
        </section>
    </main>
</body>
 
  )
}

export default Detail