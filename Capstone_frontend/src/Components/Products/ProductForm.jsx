import React, { useState } from 'react';
import axios from 'axios';
import { Container, Form, Button, Alert } from 'react-bootstrap';

function ProductForm() {
    const [formData, setFormData] = useState({
        id: '',
        name: '',
        description: '',
        price: '',
        stockQuantity: '',
        imageUrl: ''
    });
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('https://capstone-project-qh3r.onrender.com/api/products/', formData);
            setMessage('Product created successfully!');
            setError('');
            clearForm();
        } catch (error) {
            setMessage('');
            setError('Error creating product. Please try again.');
        }
    };

    const clearForm = () => {
        setFormData({
            id: '',
            name: '',
            description: '',
            price: '',
            stockQuantity: '',
            imageUrl: ''
        });
    };

    return (
        <Container fluid>
            <h1>Create a New Product</h1>
            {message && <Alert variant="success">{message}</Alert>}
            {error && <Alert variant="danger">{error}</Alert>}
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="id">
                    <Form.Label>ID</Form.Label>
                    <Form.Control type="number" name="id" value={formData.id} onChange={handleChange} placeholder="Enter ID" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="name">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Enter name" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="description">
                    <Form.Label>Description</Form.Label>
                    <Form.Control type="text" name="description" value={formData.description} onChange={handleChange} placeholder="Enter description" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="price">
                    <Form.Label>Price</Form.Label>
                    <Form.Control type="number" name="price" value={formData.price} onChange={handleChange} placeholder="Enter price" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="stockQuantity">
                    <Form.Label>Stock Quantity</Form.Label>
                    <Form.Control type="number" name="stockQuantity" value={formData.stockQuantity} onChange={handleChange} placeholder="Enter stock quantity" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="imageUrl">
                    <Form.Label>Image URL</Form.Label>
                    <Form.Control type="text" name="imageUrl" value={formData.imageUrl} onChange={handleChange} placeholder="Enter image URL" required />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Create Product
                </Button>
            </Form>
        </Container>
    );
}

export default ProductForm;
