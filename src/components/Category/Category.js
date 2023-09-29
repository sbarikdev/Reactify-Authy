
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link} from 'react-router-dom'

function Category() {
  const url = "http://localhost:8000/category_list";
  const [data, setData] = useState([]);

  const fetchInfo = () => {
    axios.get(url)
    .then((res) => {
        setData(res.data.data)
    }).catch(err=>{
        console.log(err)
    })
    
  }

  useEffect(() => {
    fetchInfo();
  }, []);

  return (
    <div className="App">
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                </tr>
            </thead>
            <tbody>
                {data.map((r,i)=>(
                    <tr key={i}>
                        <td>{r.id}</td>
                        <td><Link to={{pathname: `/category/${r.id}` }}><button>{r.name}</button></Link></td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
  );
}

export default Category;



