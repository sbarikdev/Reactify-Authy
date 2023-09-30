import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'
import { API_URL } from '../../constant/index';

const Detail = () => {
  const {id}= useParams()
//   const imageURL = 'http://localhost:8000/';
  const [data,setData]=useState([])
  const FetchDetails = ()=>{
    
    axios.get(`${API_URL}category_list?id=${id}`).then((res)=>{
        console.log(res.data.data)
        setData(res.data.data)
    }).catch(err=>{
        console.log(err)
    })
  }
  useEffect(() => {
    FetchDetails();
  }, []);

  return (
    <div className="App">
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Image</th>
                </tr>
            </thead>
            <tbody>
                {data.map((r,i)=>(
                    <tr key={i}>
                        <td>{r.id}</td>
                        <td>{r.name}</td>
                        <td><img src={data.image} alt="imagess"/></td>
                        {/* <img src={`http://localhost:8000/${data.image}`} alt="imagess2"></img> */}
                    </tr>
                ))}
            </tbody>
            <Link to="/category"> <button>Back to Category</button></Link>
        </table>
        
    </div>
 
  )
}

export default Detail