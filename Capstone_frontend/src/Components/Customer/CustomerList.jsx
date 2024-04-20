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
      const response = await axios.get('https://capstone-project-qh3r.onrender.com/api/customers');
      setUsers(response.data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  return (
    <>
      <Container fluid>
        <h1>Users</h1>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone Number</th>
              <th>Address</th>
              <th>Created Date</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user._id}>
                <td>{user._id}</td>
                <td>{user.name ? user.name : 'N/A'}</td>
                <td>{user.email ? user.email : 'N/A'}</td>
                <td>{user.phoneNumber ? user.phoneNumber : 'N/A'}</td>  
                <td>{user.address ? user.address : 'N/A'}</td>  
                <td>{user.createdAt ? user.createdAt : 'N/A'}</td>  
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </>
  );
}

export default Read;
