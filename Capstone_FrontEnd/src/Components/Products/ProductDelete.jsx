import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Form, Button, Toast, Spinner } from 'react-bootstrap';

function ProductDelete() {
    const [products, setProducts] = useState([]);
    const [selectedProductId, setSelectedProductId] = useState('');
    const [selectedProductName, setSelectedProductName] = useState('');
    const [selectedProductDescription, setSelectedProductDescription] = useState('');
    const [showToast, setShowToast] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        setLoading(true);
        setError(null);
        try {
            const response = await axios.get('https://capstone-project-fsd.onrender.com/api/products/');
            setProducts(response.data);
        } catch (error) {
            setError('Error fetching products.');
            console.error('Error fetching products:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleProductSelectChange = async (e) => {
        const productId = e.target.value;
        setSelectedProductId(productId);

        if (productId !== 'manual') {
            try {
                const response = await axios.get(`https://capstone-project-fsd.onrender.com/api/products/${productId}`);
                setSelectedProductName(response.data.name);
                setSelectedProductDescription(response.data.description);
            } catch (error) {
                console.error('Error fetching product:', error);
            }
        } else {
            setSelectedProductName('');
            setSelectedProductDescription('');
        }
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();

        if (!selectedProductId) {
            alert('Please select a product.');
            return;
        }

        const confirmDelete = window.confirm('Are you sure you want to delete the product?');
        if (!confirmDelete) return;

        try {
            await axios.delete(`https://capstone-project-fsd.onrender.com/api/products/${selectedProductId}`);
            setShowToast(true);
            setSelectedProductId('');
            setSelectedProductName('');
            setSelectedProductDescription('');
            // Remove the deleted product from the products array
            setProducts(products.filter(product => product._id !== parseInt(selectedProductId)));
        } catch (error) {
            console.error('Error deleting product:', error);
            // Display error message or handle it as needed
        }
    };

    return (
        <Container fluid>
            <h1>Delete a Product</h1>
            {loading ? (
                <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
            ) : error ? (
                <div>Error: {error}</div>
            ) : (
                <Form onSubmit={handleFormSubmit}>
                    <Form.Group className="mb-3" controlId="productId">
                        <Form.Control as="select" value={selectedProductId} onChange={handleProductSelectChange}>
                            <option value="">Select Product ID</option>
                            {products.map(product => (
                                <option key={product._id} value={product._id}>{product._id}</option>
                            ))}
                            <option value="manual">Enter ID Manually</option>
                        </Form.Control>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="productName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" value={selectedProductName} readOnly />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="productDescription">
                        <Form.Label>Description</Form.Label>
                        <Form.Control type="text" value={selectedProductDescription} readOnly />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Delete
                    </Button>
                </Form>
            )}

            <div className="toast-container position-fixed bottom-0 end-0 p-3">
                <Toast show={showToast} onClose={() => setShowToast(false)}>
                    <Toast.Header>
                        <strong className="me-auto">Delete Product</strong>
                        <button type="button" className="btn-close" onClick={() => setShowToast(false)}></button>
                    </Toast.Header>
                    <Toast.Body>Product deleted successfully!</Toast.Body>
                </Toast>
            </div>
        </Container>
    );
}

export default ProductDelete;
