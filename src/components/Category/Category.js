
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link} from 'react-router-dom'
import { API_URL } from '../../constant/index';

function Category() {
  const [data, setData] = useState([]);

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

  return (
    <div className="App">
        <table>
            <thead>
            <Link to={{pathname: `/addcategory` }}><button>Add category</button></Link>
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
                        <td><Link to={{pathname: `/editcategory/${r.id}` }}><button>update </button></Link></td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
  );
}

export default Category;



