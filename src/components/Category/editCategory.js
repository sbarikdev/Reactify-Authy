import React, { useEffect, useState } from 'react';
import { notifications } from '@mantine/notifications';
import { useNavigate, useParams } from 'react-router-dom'
import { API_URL } from '../../constant/index';
import axios from 'axios';
import {
    Card,
    Col,
    Container,
    Grid,
    // Input,
    // FileInput,
    // Select,
    Textarea,
    Button,
    // Text,
    TextInput,
} from '@mantine/core';

function EditCategory(props) {
    const [data,setData]=useState([])
    // const [image, setImage] = useState({ base64: '', files: [] });
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const navigate = useNavigate();
    const {id}= useParams()


    // const FetchDetails = ()=>{
    //     axios.get(`${API_URL}category_list?id=${id}`).then((res)=>{
    //         console.log(res.data.data[0])
    //         console.log('helloworld---->satyajit here')
    //         setData(res.data.data[0])
    //         }).catch(err=>{
    //         console.log(err)
    //         })
    //     }
    // useEffect(() => {
    //   FetchDetails();
    // }, []);

    const FetchDetails = ()=>{
        axios.get(`${API_URL}category_list?id=${id}`).then((res)=>{
            console.log(res.data.data[0])
            console.log('helloworld---->satyajit here')
            const result = res.data.data[0]
            setName(result.name)
            setDescription(result.description)
            setData(res.data.data[0])
            }).catch(err=>{
            console.log(err)
            })
        }
    useEffect(() => {
      FetchDetails();
    }, []);

    // const isFile = (input) => "File" in window && input instanceof File;
    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('name', name);
        formData.append('description', description);
        // isFile(image) && formData.append('image', image);
        axios.put(`${API_URL}category_list?id=${id}`, formData)
            .then((res) => {
                console.log(res);
                notifications.show({
                    title: 'Category Updated',
                    message: 'Category Updated Successfully',
                    color: 'green',
                    autoClose: 5000,
                });
                props.showAlert("Category Updated Successfully" , "success");
                navigate('/category')
            })
            .catch((err) => {
                console.log(err);
                notifications.show({
                    title: 'Something went wrong',
                    message: 'Something went wrong',
                    color: 'red',
                    autoClose: 5000,
                });
                props.showAlert("Something Went Wrong" , "failure");
            });
    };
    // console.log(data)
    console.log(data.name)
    console.log(data.description)
    return (
        <Container size="sm">
            <Card shadow="sm">
                <h1>Edit Category: {name}</h1>
                <form onSubmit={handleSubmit} encType="multipart/form-data">
                    <Grid>
                        <Col span={12}>
                            <TextInput
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                label="Category Name"
                                placeholder="Category Name"
                                required
                            />
                        </Col>
                        <Col span={12}>
                            <Textarea
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                label="Description"
                                placeholder="Description"
                            />
                        </Col>
                        {/* <Col span={12}>
                            <FileInput
                                files={image.files}
                                onChange={setImage}
                                label="Image"
                                placeholder="Image"
                            />
                        </Col> */}
                    </Grid>

                    <Button mt="xl" type="submit" color="blue">
                        Update Category
                    </Button>
                </form>
            </Card>
        </Container>
    );
}

export default EditCategory;