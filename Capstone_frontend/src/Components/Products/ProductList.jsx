import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Table } from 'react-bootstrap';

function Read() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get('https://capstone-project-qh3r.onrender.com/api/products');
      setUsers(response.data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  return (
    <>
      <Container fluid>
        <h1>Products</h1>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Description</th>
              <th>price</th>
              <th>Stock Quantity</th>
              <th>imageUrl</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name ? user.name : 'N/A'}</td>
                <td>{user.description ? user.description : 'N/A'}</td>
                <td>{user.price ? user.price : 'N/A'}</td>  
                <td>{user.stockQuantity ? user.stockQuantity : 'N/A'}</td>  
                <td>{user.imageUrl ? user.imageUrl : 'N/A'}</td>  
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </>
  );
}

export default Read;
