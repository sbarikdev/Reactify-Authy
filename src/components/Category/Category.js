
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link} from 'react-router-dom';
// import { notifications } from '@mantine/notifications';
import { API_URL } from '../../constant/index';
import {
    Input,
} from '@mantine/core';
import './category.css';

function Category(props) {
  const [data, setData] = useState([]);
  const [category, setCategory] = useState([]);

  const fetchInfo = () => {
    axios.get(`${API_URL}category_list`)
    .then((res) => {
        setData(res.data.data)
    }).catch(err=>{
        console.log(err)
    })
  }

  useEffect(() => {
    fetchInfo();
  }, []);

  const removeData = (id) => {
    const confirmed = window.confirm('Are you sure you want to delete this item?');

    if (confirmed){
        axios.delete(`${API_URL}category_list?id=${id}`).then(res => {
            const del = category.filter(category => id !== category.id)
            setCategory(del);
            props.showAlert("Category deleted Successfully" , "success");
            window.location.reload();
            
        }).catch((err) => {
            console.log(err);
            props.showAlert("Something Went Wrong" , "failure");
        });
        }
    };

    // const [items, setItems] = useState(initialItems);
    const [searchTerm, setSearchTerm] = useState('');

    // Function to update the search term
    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
    };

    // Function to filter items based on the search term
    const filteredItems = data.filter((item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

  return (
        <main>
            <br></br>
            
        <h1>Category table:  <Link to={{pathname: `/addcategory` }}>Add category</Link> </h1>
        <Input
            type="text"
            placeholder="Search by Item Name"
            value={searchTerm}
            onChange={handleSearch}
        />
        <figure class="wrapper">
        <table>
            <caption class="visually-hidden">Product plans and their available features</caption>

            <thead>
            <tr>
                <th scope="col">ID</th>
                <th scope="col">Name</th>
                <th scope="col">Description</th>
                <th scope="col">Update</th>
                <th scope="col">Delete</th>
            </tr>
            </thead>
            <tbody>
            {filteredItems.map((r,i)=>(
            <tr key={i}>
                <th scope="row">{r.id}</th>
                <td><Link to={{pathname: `/category/${r.id}` }}>{r.name}</Link></td>
                <td>{r.description}</td>
                <td><Link to={{pathname: `/editcategory/${r.id}` }}><button>update </button></Link></td>
                <td><button className='button' onClick={() => removeData(r.id)}>Delete</button></td>
            </tr>
            ))}
            </tbody>
        </table>
        </figure>
        </main>
  );
}

export default Category;



