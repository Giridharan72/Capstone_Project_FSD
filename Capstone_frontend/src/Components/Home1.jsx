import React from 'react';

const Home1 = ()=>{
    return(
        <div>
            <h3>Home Page</h3>
        </div>
    )
}

// import React from 'react';
// import { BrowserRouter as Router, Link, Routes, Route ,BrowserRouter} from 'react-router-dom';
// import { CartProvider } from '../context/cartContext';
// import { Navbar, Container, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
// import Header from './Header';
// import Home from "./Home";
// import Cart from './Cart';
// import CustomerList from './Customer/CustomerList';
// import CustomerForm from './Customer/CustomerForm';
// import CustomerEdit from './Customer/CustomerEdit';
// import CustomerDelete from './Customer/CustomerDelete';
// import ProductList from './Products/ProductList';
// import ProductForm from './Products/ProductForm';
// import ProductEdit from './Products/ProductEdit';
// import ProductDelete from './Products/ProductDelete';

// function Home1() {
//   return (
//     <BrowserRouter>
//       <CartProvider>
//         <div className="container-fluid">
//           <Header /> {/* Include Header component here */}
//           <div className="extra-column"></div>
//           <div className="flex-row">
//             <div className="column"></div>
//             {/* Apply a separate background color to the navbar */}
//             <Navbar expand="lg" bg="light" variant="light" style={{ borderBottom: '1px solid #ccc' }}>
//               <Container fluid>
//                 <Navbar.Brand href="#">Inventory Billing App</Navbar.Brand>
//                 <Navbar.Toggle aria-controls="navbarNavDropdown" />
//                 <Navbar.Collapse id="navbarNavDropdown">
//                   <Nav className="me-auto mb-2 mb-lg-0">
//                     <Link to="/" className="nav-link">Home</Link>
//                     <Link to="/" className="nav-link">Invoice</Link>
//                     <Link to="/Cart" className="nav-link">Cart</Link>
//                     <NavDropdown title="Products" id="navbarScrollingDropdown">
//                       <Link to="/ProductList" className="dropdown-item">View Products</Link>
//                       <Link to="/ProductForm" className="dropdown-item">Create a New Product</Link>
//                       <Link to="/ProductEdit" className="dropdown-item">Edit / Update a Product</Link>
//                       <Link to="/ProductDelete" className="dropdown-item">Delete a Product</Link>
//                     </NavDropdown>
//                     <NavDropdown title="Customers" id="navbarScrollingDropdown">
//                       <Link to="/CustomerList" className="dropdown-item">View Customers</Link>
//                       <Link to="/CustomerForm" className="dropdown-item">Create a New Customer</Link>
//                       <Link to="/EditCustomer" className="dropdown-item">Edit / Update a Customer</Link>
//                       <Link to="/DeleteCustomer" className="dropdown-item">Delete a Customer</Link>
//                     </NavDropdown>
//                   </Nav>
                
//                   <Form className="d-flex">
//                     <FormControl
//                       type="search"
//                       placeholder="Search"
//                       className="me-2"
//                       aria-label="Search"
//                     />
//                     <Button variant="outline-success">Search</Button>
//                   </Form>
//                 </Navbar.Collapse>
//               </Container>
//             </Navbar>
//             <div className="column"></div>
//           </div>
//           <div className="extra-column"></div>

//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/CustomerList" element={<CustomerList />} />
//             <Route path="/CustomerForm" element={<CustomerForm />} />
//             <Route path="/EditCustomer" element={<CustomerEdit />} />
//             <Route path="/DeleteCustomer" element={<CustomerDelete />} />
//             <Route path="/ProductList" element={<ProductList />} />
//             <Route path="/ProductForm" element={<ProductForm />} />
//             <Route path="/ProductDelete" element={<ProductDelete />} />
//             <Route path="/ProductEdit" element={<ProductEdit />} />
//             <Route path="/Cart" element={<Cart />} />
//             {/* Add routes for other components */}
//           </Routes>
//         </div>
//       </CartProvider>
//       </ BrowserRouter>
//   );
// }

export default Home1;
