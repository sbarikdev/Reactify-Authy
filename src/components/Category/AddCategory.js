import React, {useState } from 'react';
import { notifications } from '@mantine/notifications';
import { useNavigate } from 'react-router-dom'
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

function AddCategory(props) {
    const [image, setImage] = useState({ base64: '', files: [] });
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const navigate = useNavigate();

    const isFile = (input) => "File" in window && input instanceof File;
    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('name', name);
        formData.append('description', description);
        isFile(image) && formData.append('image', image);
        axios.post(`${API_URL}category_list`, formData)
            .then((res) => {
                console.log(res);
                notifications.show({
                    title: 'Category Added',
                    message: 'Category Added Successfully',
                    color: 'green',
                    autoClose: 5000,
                });
                props.showAlert("Category added Successfully" , "success");
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

    return (
        <main>
        <Container size="sm">
            <Card shadow="sm">
                <h1>Add Category</h1>
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
                        <Col span={12}>
                            <input
                                type="file"
                                accept="image/*"
                                files={image.files}
                                onChange={(e) => setImage(e.target.files[0])}
                                label="Image"
                                placeholder="Image"
                            />
                        </Col>
                    </Grid>

                    <Button mt="xl" type="submit" color="blue">
                        Add Category
                    </Button>
                </form>
            </Card>
        </Container>
        </main>
    );
}

export default AddCategory;