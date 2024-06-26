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
      const response = await axios.get('https://mock-api-bdg1.onrender.com/data');
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
              <th>Company</th>
              <th>Website</th>
              <th>Phone</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name ? user.name : 'N/A'}</td>
                <td>{user.email ? user.name : 'N/A'}</td>
                <td>{user.company ? user.company.name : 'N/A'}</td>
                <td>{user.website ? user.name : 'N/A'}</td>
                <td>{user.phone ? user.name : 'N/A'}</td>  
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </>
  );
}

export default Read;
