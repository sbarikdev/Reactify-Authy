
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link} from 'react-router-dom';
import { notifications } from '@mantine/notifications';
import { API_URL } from '../../constant/index';

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
                        <td><button className='button' onClick={() => removeData(r.id)}>Delete</button></td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
  );
}

export default Category;



