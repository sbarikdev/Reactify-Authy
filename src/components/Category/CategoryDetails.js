import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'
import { API_URL } from '../../constant/index';
import {
    Container,
} from '@mantine/core';
import './categoryDetails.css'

const Detail = () => {
  const {id}= useParams();
  const [data,setData]=useState([]);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');

  const FetchDetails = ()=>{
    
    axios.get(`${API_URL}category_list?id=${id}`).then((res)=>{
        setData(res.data.data)
        const result = res.data.data[0]
        setName(result.name)
        setDescription(result.description)
        setImage(result.image) 

    }).catch(err=>{
        console.log(err)
    })
  }
  useEffect(() => {
    FetchDetails();
  }, []);

  return (
    <main>
    <div className="App">
    <Container size="sm">
        <h1>Category Details: {name}</h1> <Link to="/category"> Back to Category List</Link>
        
        <br></br><br></br>
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Image</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{id}</td>
                    <td>{name}</td>
                    <td>{description}</td>
                    <td><img src={image} width="60" height="60" alt="imagess"/></td>
                </tr>
            </tbody>
        </table>
        </Container>
        {data.map((category) => (
        <main>
            {category.product.map((product) => (
                <div> 
                    <section class="product">
                    <img src={API_URL+product.image} width="100" height="60" alt="Product 1"/>
                    <h2>{product.name}</h2>
                    <p>{product.description}</p>
                    <p>Price: ${product.price}</p>
                    <button>Add to Cart</button>
                    </section>
                </div>
             ))}
        </main>
    ))}
    </div>
    </main>

    
 
  )
}

export default Detail