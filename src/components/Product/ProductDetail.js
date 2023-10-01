import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'
import { API_URL } from '../../constant/index';
import {
    Container,
} from '@mantine/core';
import './ProductList.css';

const Detail = () => {
  const {id}= useParams();
  const [data,setData]=useState([]);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');
  const [price, setPrice] = useState('');

  const FetchDetails = ()=>{
    
    axios.get(`${API_URL}product_list?id=${id}`).then((res)=>{
        setData(res.data.data)
        const result = res.data.data[0]
        setName(result.name)
        setDescription(result.description)
        setImage(result.image) 
        setPrice(result.price)

    }).catch(err=>{
        console.log(err)
    })
  }
  useEffect(() => {
    FetchDetails();
  }, []);

  return (
    <body>
         <br></br><br></br><br></br>
         <header>
        <h1>Product: {name}</h1>
    </header>
    <main>
        <section class="product-detail">
            <img src={image} width="400" height="350" alt="Product Image"/>
            <div class="product-info">
                <h2>{name}</h2>
                <p>{description}</p>
                <p class="price">${price}</p>
                <label for="quantity">Quantity:</label>
                <input type="number" id="quantity" name="quantity" value="1" min="1"/>
                <button>Add to Cart</button>
            </div>
        </section>
    </main>
</body>
 
  )
}

export default Detail