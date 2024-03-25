// import React from 'react';
// import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom';
// import { CartProvider } from './context/cartContext';
// import { Navbar, Container, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
// import Header from './components/Header';
// import Home from "./Components/Home";
// import Cart from './Components/Cart';
// import CustomerList from './Components/Customer/CustomerList';
// import CustomerForm from './Components/Customer/CustomerForm';
// import CustomerEdit from './Components/Customer/CustomerEdit';
// import CustomerDelete from './Components/Customer/CustomerDelete';
// import ProductList from './Components/Products/ProductList';
// import ProductForm from './Components/Products/ProductForm';
// import ProductEdit from './Components/Products/ProductEdit';
// import ProductDelete from './Components/Products/ProductDelete';

// function Apps() {
//   return (
    
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
   
//   );
// }
// export default Apps;

// import React from 'react';
// import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom';
// import { CartProvider } from './context/cartContext';
// import { Navbar, Container, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
// import Header from './components/Header';
// import Home from "./Components/Home";
// import Cart from './Components/Cart';
// import CustomerList from './Components/Customer/CustomerList';
// import CustomerForm from './Components/Customer/CustomerForm';
// import CustomerEdit from './Components/Customer/CustomerEdit';
// import CustomerDelete from './Components/Customer/CustomerDelete';
// import ProductList from './Components/Products/ProductList';
// import ProductForm from './Components/Products/ProductForm';
// import ProductEdit from './Components/Products/ProductEdit';
// import ProductDelete from './Components/Products/ProductDelete';



// // Now your main component
// function Apps() {
//   return (
//     <CartProvider>
//       <div className="container-fluid">
//         <Header /> {/* Include Header component here */}
//         <div className="extra-column"></div>
//         <div className="flex-row">
//           <div className="column"></div>
//           {/* Apply a separate background color to the navbar */}
//           <Navbar expand="lg" bg="light" variant="light" style={{ borderBottom: '1px solid #ccc' }}>
//             <Container fluid>
//               <Navbar.Brand href="#">Inventory Billing App</Navbar.Brand>
//               <Navbar.Toggle aria-controls="navbarNavDropdown" />
//               <Navbar.Collapse id="navbarNavDropdown">
//                 <Nav className="me-auto mb-2 mb-lg-0">
//                   <Link to="/" className="nav-link">Home</Link>
//                   <Link to="/" className="nav-link">Invoice</Link>
//                   <Link to="/Cart" className="nav-link">Cart</Link>
                
//                   <NavDropdown title="Products" id="navbarScrollingDropdown">
//                     <Link to="/ProductList" className="dropdown-item">View Products</Link>
//                     <Link to="/ProductForm" className="dropdown-item">Create a New Product</Link>
//                     <Link to="/ProductEdit" className="dropdown-item">Edit / Update a Product</Link>
//                     <Link to="/ProductDelete" className="dropdown-item">Delete a Product</Link>
//                   </NavDropdown>
//                   <NavDropdown title="Customers" id="navbarScrollingDropdown">
//                     <Link to="/CustomerList" className="dropdown-item">View Customers</Link>
//                     <Link to="/CustomerForm" className="dropdown-item">Create a New Customer</Link>
//                     <Link to="/EditCustomer" className="dropdown-item">Edit / Update a Customer</Link>
//                     <Link to="/DeleteCustomer" className="dropdown-item">Delete a Customer</Link>
//                   </NavDropdown>
//                 </Nav>
                
//                 <Form className="d-flex">
//                   <FormControl
//                     type="search"
//                     placeholder="Search"
//                     className="me-2"
//                     aria-label="Search"
//                   />
//                   <Button variant="outline-success">Search</Button>
//                 </Form>
//               </Navbar.Collapse>
//             </Container>
//           </Navbar>
//           <div className="column"></div>
//         </div>
//         <div className="extra-column"></div>

//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/CustomerList" element={<CustomerList />} />
//           <Route path="/CustomerForm" element={<CustomerForm />} />
//           <Route path="/EditCustomer" element={<CustomerEdit />} />
//           <Route path="/DeleteCustomer" element={<CustomerDelete />} />
//           <Route path="/ProductList" element={<ProductList />} />
//           <Route path="/ProductForm" element={<ProductForm />} />
//           <Route path="/ProductDelete" element={<ProductDelete />} />
//           <Route path="/ProductEdit" element={<ProductEdit />} />
//           <Route path="/Cart" element={<Cart />} />
//           {/* Add routes for other components */}
//         </Routes>
//       </div>
//     </CartProvider>
//   );
// }

// export default Apps;
// import React from 'react';
// import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom';
// import { CartProvider } from './context/cartContext';
// import { Navbar, Container, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
// import Header from './components/Header';
// import Home from "./Components/Home";
// import Cart from './Components/Cart';
// import CustomerList from './Components/Customer/CustomerList';
// import CustomerForm from './Components/Customer/CustomerForm';
// import CustomerEdit from './Components/Customer/CustomerEdit';
// import CustomerDelete from './Components/Customer/CustomerDelete';
// import ProductList from './Components/Products/ProductList';
// import ProductForm from './Components/Products/ProductForm';
// import ProductEdit from './Components/Products/ProductEdit';
// import ProductDelete from './Components/Products/ProductDelete';

// // Now your main component
// function Apps() {
//   return (
//     <CartProvider>
//       <div className="container-fluid">
//         <div className="extra-column"></div>
//         <div className="flex-row">
//           <div className="column"></div>
//           {/* Apply a separate background color to the navbar */}
//           <Navbar expand="lg" bg="light" variant="light" style={{ borderBottom: '1px solid #ccc' }}>
//             <Container fluid>
//               <Navbar.Brand href="#">Inventory Billing App</Navbar.Brand>
//               <Navbar.Toggle aria-controls="navbarNavDropdown" />
//               <Navbar.Collapse id="navbarNavDropdown">
//                 <Nav className="me-auto mb-2 mb-lg-0">
//                   <Link to="/" className="nav-link">Home</Link>
//                   <Link to="/" className="nav-link">Invoice</Link>

//                   <NavDropdown title="Products" id="navbarScrollingDropdown">
//                     <Link to="/ProductList" className="dropdown-item">View Products</Link>
//                     <Link to="/ProductForm" className="dropdown-item">Create a New Product</Link>
//                     <Link to="/ProductEdit" className="dropdown-item">Edit / Update a Product</Link>
//                     <Link to="/ProductDelete" className="dropdown-item">Delete a Product</Link>
//                   </NavDropdown>
//                   <NavDropdown title="Customers" id="navbarScrollingDropdown">
//                     <Link to="/CustomerList" className="dropdown-item">View Customers</Link>
//                     <Link to="/CustomerForm" className="dropdown-item">Create a New Customer</Link>
//                     <Link to="/EditCustomer" className="dropdown-item">Edit / Update a Customer</Link>
//                     <Link to="/DeleteCustomer" className="dropdown-item">Delete a Customer</Link>
//                   </NavDropdown>
//                 </Nav>
                
//                 <Form className="d-flex">
//                   <FormControl
//                     type="search"
//                     placeholder="Search"
//                     className="me-2"
//                     aria-label="Search"
//                   />
//                   <Button variant="outline-success">Search</Button>
//                 </Form>
                
//                 {/* Include Header component here */}
//                 <Header />
//               </Navbar.Collapse>
//             </Container>
//           </Navbar>
//           <div className="column"></div>
//         </div>
//         <div className="extra-column"></div>

//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/CustomerList" element={<CustomerList />} />
//           <Route path="/CustomerForm" element={<CustomerForm />} />
//           <Route path="/EditCustomer" element={<CustomerEdit />} />
//           <Route path="/DeleteCustomer" element={<CustomerDelete />} />
//           <Route path="/ProductList" element={<ProductList />} />
//           <Route path="/ProductForm" element={<ProductForm />} />
//           <Route path="/ProductDelete" element={<ProductDelete />} />
//           <Route path="/ProductEdit" element={<ProductEdit />} />
//           <Route path="/Cart" element={<Cart />} />
//           {/* Add routes for other components */}
//         </Routes>
//       </div>
//     </CartProvider>
//   );
// }

// export default Apps;
// import React from 'react';
// import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom';
// import { CartProvider } from './context/cartContext';
// import { Navbar, Container, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
// import Header from './components/Header';
// import Home from "./Components/Home";
// import Cart from './Components/Cart';
// import CustomerList from './Components/Customer/CustomerList';
// import CustomerForm from './Components/Customer/CustomerForm';
// import CustomerEdit from './Components/Customer/CustomerEdit';
// import CustomerDelete from './Components/Customer/CustomerDelete';
// import ProductList from './Components/Products/ProductList';
// import ProductForm from './Components/Products/ProductForm';
// import ProductEdit from './Components/Products/ProductEdit';
// import ProductDelete from './Components/Products/ProductDelete';

// // Now your main component
// function Apps() {
//   return (
//     <CartProvider>
//       <div className="container-fluid">
//         <div className="extra-column"></div>
//         <div className="flex-row">
//           <div className="column"></div>
//           {/* Apply a separate background color to the navbar */}
//           <Navbar expand="lg" bg="light" variant="light" style={{ borderBottom: '1px solid #ccc' }}>
//             <Container fluid>
//               <Navbar.Brand href="#">Inventory Billing App</Navbar.Brand>
//               <Navbar.Toggle aria-controls="navbarNavDropdown" />
//               <Navbar.Collapse id="navbarNavDropdown">
//                 <Nav className="me-auto mb-2 mb-lg-0">
//                   <Link to="/" className="nav-link">Home</Link>
//                   <Link to="/" className="nav-link">Invoice</Link>
//                   <Link to="/Cart" className='nav-link'>Cart</Link>
                
//                   <NavDropdown title="Products" id="navbarScrollingDropdown">
//                     <Link to="/ProductList" className="dropdown-item">View Products</Link>
//                     <Link to="/ProductForm" className="dropdown-item">Create a New Product</Link>
//                     <Link to="/ProductEdit" className="dropdown-item">Edit / Update a Product</Link>
//                     <Link to="/ProductDelete" className="dropdown-item">Delete a Product</Link>
//                   </NavDropdown>
//                   <NavDropdown title="Customers" id="navbarScrollingDropdown">
//                     <Link to="/CustomerList" className="dropdown-item">View Customers</Link>
//                     <Link to="/CustomerForm" className="dropdown-item">Create a New Customer</Link>
//                     <Link to="/EditCustomer" className="dropdown-item">Edit / Update a Customer</Link>
//                     <Link to="/DeleteCustomer" className="dropdown-item">Delete a Customer</Link>
//                   </NavDropdown>
//                 </Nav>
                
                
//                 <Header />
                
                
//                 <Form className="d-flex">
//                   <FormControl
//                     type="search"
//                     placeholder="Search"
//                     className="me-2"
//                     aria-label="Search"
//                   />
//                   <Button variant="outline-success">Search</Button>
//                 </Form>
                
//                 {/* Include Header component here */}
                
//               </Navbar.Collapse>
//             </Container>
//           </Navbar>
//           <div className="column"></div>
//         </div>
//         <div className="extra-column"></div>

//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/CustomerList" element={<CustomerList />} />
//           <Route path="/CustomerForm" element={<CustomerForm />} />
//           <Route path="/EditCustomer" element={<CustomerEdit />} />
//           <Route path="/DeleteCustomer" element={<CustomerDelete />} />
//           <Route path="/ProductList" element={<ProductList />} />
//           <Route path="/ProductForm" element={<ProductForm />} />
//           <Route path="/ProductDelete" element={<ProductDelete />} />
//           <Route path="/ProductEdit" element={<ProductEdit />} />
//           <Route path="/Cart" element={<Cart />} />
//           {/* Add routes for other components */}
//         </Routes>
//       </div>
//     </CartProvider>
//   );
// }

// export default Apps;
// import React from 'react';
// import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom';
// import { CartProvider } from './context/cartContext';
// import { Navbar, Container, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
// import Header from './components/Header';
// import Home from "./Components/Home";
// import Cart from './Components/Cart';
// import CustomerList from './Components/Customer/CustomerList';
// import CustomerForm from './Components/Customer/CustomerForm';
// import CustomerEdit from './Components/Customer/CustomerEdit';
// import CustomerDelete from './Components/Customer/CustomerDelete';
// import ProductList from './Components/Products/ProductList';
// import ProductForm from './Components/Products/ProductForm';
// import ProductEdit from './Components/Products/ProductEdit';
// import ProductDelete from './Components/Products/ProductDelete';

// // Now your main component
// function Apps() {
//   return (
//     <CartProvider>
//       <div className="container-fluid">
//         <div className="extra-column"></div>
//         <div className="flex-row">
//           <div className="column"></div>
//           {/* Apply a separate background color to the navbar */}
//           <Navbar expand="lg" bg="light" variant="light" style={{ borderBottom: '1px solid #ccc' }}>
//             <Container fluid>
//               <Navbar.Brand href="#">Inventory Billing App</Navbar.Brand>
//               <Navbar.Toggle aria-controls="navbarNavDropdown" />
//               <Navbar.Collapse id="navbarNavDropdown">
//                 <Nav className="me-auto mb-2 mb-lg-0">
//                   <Link to="/" className="nav-link">Home</Link>
//                   <Link to="/" className="nav-link">Invoice</Link>
                
                
//                   <NavDropdown title="Products" id="navbarScrollingDropdown">
//                     <Link to="/ProductList" className="dropdown-item">View Products</Link>
//                     <Link to="/ProductForm" className="dropdown-item">Create a New Product</Link>
//                     <Link to="/ProductEdit" className="dropdown-item">Edit / Update a Product</Link>
//                     <Link to="/ProductDelete" className="dropdown-item">Delete a Product</Link>
//                   </NavDropdown>
//                   <NavDropdown title="Customers" id="navbarScrollingDropdown">
//                     <Link to="/CustomerList" className="dropdown-item">View Customers</Link>
//                     <Link to="/CustomerForm" className="dropdown-item">Create a New Customer</Link>
//                     <Link to="/EditCustomer" className="dropdown-item">Edit / Update a Customer</Link>
//                     <Link to="/DeleteCustomer" className="dropdown-item">Delete a Customer</Link>
//                   </NavDropdown>
//                 </Nav>
                
//                 <div style={{ marginRight: '10px' }}> {/* Use marginRight instead of marginRight=10px */}
//     <Header /> {/* Include Header component */}
// </div>
                
                
//                 <Form className="d-flex">
//                   <FormControl
//                     type="search"
//                     placeholder="Search"
//                     className="me-2"
//                     aria-label="Search"
//                   />
//                   <Button variant="outline-success">Search</Button>
//                 </Form>
                
//               </Navbar.Collapse>
//             </Container>
//           </Navbar>
//           <div className="column"></div>
//         </div>
//         <div className="extra-column"></div>

//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/CustomerList" element={<CustomerList />} />
//           <Route path="/CustomerForm" element={<CustomerForm />} />
//           <Route path="/EditCustomer" element={<CustomerEdit />} />
//           <Route path="/DeleteCustomer" element={<CustomerDelete />} />
//           <Route path="/ProductList" element={<ProductList />} />
//           <Route path="/ProductForm" element={<ProductForm />} />
//           <Route path="/ProductDelete" element={<ProductDelete />} />
//           <Route path="/ProductEdit" element={<ProductEdit />} />
//           <Route path="/cart" element={<Cart />} /> {/* Define the route for '/cart' */}
//           {/* Add routes for other components */}
//         </Routes>
//       </div>
//     </CartProvider>
//   );
// }

// export default Apps;


// import React from 'react';
// import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom';
// import { CartProvider } from './context/cartContext';
// import { Navbar, Container, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
// import Header from './components/Header';
// import Home from "./Components/Home";
// import Cart from './Components/Cart';
// import CustomerList from './Components/Customer/CustomerList';
// import CustomerForm from './Components/Customer/CustomerForm';
// import CustomerEdit from './Components/Customer/CustomerEdit';
// import CustomerDelete from './Components/Customer/CustomerDelete';
// import ProductList from './Components/Products/ProductList';
// import ProductForm from './Components/Products/ProductForm';
// import ProductEdit from './Components/Products/ProductEdit';
// import ProductDelete from './Components/Products/ProductDelete';

// // Now your main component
// function Apps() {
//   return (
//     <CartProvider>
//       <div className="container-fluid">
//         <div className="extra-column"></div>
//         <div className="flex-row">
//           <div className="column"></div>
//           {/* Apply a separate background color to the navbar */}
//           <Navbar expand="lg" bg="primary" variant="dark" style={{ borderBottom: '1px solid #ccc' }}> {/* Changed bg-light to bg-primary */}
//     <Container fluid> {/* Set fluid attribute to make the container fit the width of its parent */}
//         <Navbar.Brand href="#">Inventory Billing App</Navbar.Brand>
//         <Navbar.Toggle aria-controls="navbarNavDropdown" />
//         <Navbar.Collapse id="navbarNavDropdown">
//             <Nav className="me-auto mb-2 mb-lg-0">
//                 <Link to="/" className="nav-link">Home</Link>
//                 <Link to="/" className="nav-link">Invoice</Link>


//                 <NavDropdown title="Products" id="navbarScrollingDropdown">
//                     <Link to="/ProductList" className="dropdown-item">View Products</Link>
//                     <Link to="/ProductForm" className="dropdown-item">Create a New Product</Link>
//                     <Link to="/ProductEdit" className="dropdown-item">Edit / Update a Product</Link>
//                     <Link to="/ProductDelete" className="dropdown-item">Delete a Product</Link>
//                 </NavDropdown>
//                 <NavDropdown title="Customers" id="navbarScrollingDropdown">
//                     <Link to="/CustomerList" className="dropdown-item">View Customers</Link>
//                     <Link to="/CustomerForm" className="dropdown-item">Create a New Customer</Link>
//                     <Link to="/EditCustomer" className="dropdown-item">Edit / Update a Customer</Link>
//                     <Link to="/DeleteCustomer" className="dropdown-item">Delete a Customer</Link>
//                 </NavDropdown>
//             </Nav>

//             <div style={{ marginRight: '10px' }}>
//                 <Header /> {/* Include Header component */}
//             </div>


//             <Form className="d-flex">
//                 <FormControl
//                     type="search"
//                     placeholder="Search"
//                     className="me-2"
//                     aria-label="Search"
//                 />
//                 <Button variant="outline-success">Search</Button>
//             </Form>

//         </Navbar.Collapse>
//     </Container>
// </Navbar>

//           <div className="column"></div>
//         </div>
//         <div className="extra-column"></div>

//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/CustomerList" element={<CustomerList />} />
//           <Route path="/CustomerForm" element={<CustomerForm />} />
//           <Route path="/EditCustomer" element={<CustomerEdit />} />
//           <Route path="/DeleteCustomer" element={<CustomerDelete />} />
//           <Route path="/ProductList" element={<ProductList />} />
//           <Route path="/ProductForm" element={<ProductForm />} />
//           <Route path="/ProductDelete" element={<ProductDelete />} />
//           <Route path="/ProductEdit" element={<ProductEdit />} />
//           <Route path="/cart" element={<Cart />} /> {/* Define the route for '/cart' */}
//           {/* Add routes for other components */}
//         </Routes>
//       </div>
//     </CartProvider>
//   );
// }

// export default Apps;
// import React from 'react';
// import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom';
// import { CartProvider } from './context/cartContext';
// import { Navbar, Container, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
// import Header from './components/Header';
// import Home from "./Components/Home";
// import Cart from './Components/Cart';
// import CustomerList from './Components/Customer/CustomerList';
// import CustomerForm from './Components/Customer/CustomerForm';
// import CustomerEdit from './Components/Customer/CustomerEdit';
// import CustomerDelete from './Components/Customer/CustomerDelete';
// import ProductList from './Components/Products/ProductList';
// import ProductForm from './Components/Products/ProductForm';
// import ProductEdit from './Components/Products/ProductEdit';
// import ProductDelete from './Components/Products/ProductDelete';

// function Apps() {
//   return (
//     <CartProvider>
//       <div className="container-fluid"> {/* Ensure this container stretches to full width */}
//         <div className="row"> {/* Use Bootstrap's row class */}
//           <div className="col"></div>
//           <div className="col-12"> {/* Use col-12 to ensure this column stretches to full width on all screen sizes */}
//             <Navbar expand="lg" bg="primary" variant="dark" style={{ borderBottom: '1px solid #ccc' }}>
//               <Container fluid>
//                 <Navbar.Brand href="#">Inventory Billing App</Navbar.Brand>
//                 <Navbar.Toggle aria-controls="navbarNavDropdown" />
//                 <Navbar.Collapse id="navbarNavDropdown">
//                   <Nav className="me-auto mb-2 mb-lg-0">
//                     <Link to="/" className="nav-link">Home</Link>
//                     <Link to="/" className="nav-link">Invoice</Link>
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
//                   <div style={{ marginRight: '10px' }}>
//                     <Header />
//                   </div>
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
//             <Routes>
//               <Route path="/" element={<Home />} />
//               <Route path="/CustomerList" element={<CustomerList />} />
//               <Route path="/CustomerForm" element={<CustomerForm />} />
//               <Route path="/EditCustomer" element={<CustomerEdit />} />
//               <Route path="/DeleteCustomer" element={<CustomerDelete />} />
//               <Route path="/ProductList" element={<ProductList />} />
//               <Route path="/ProductForm" element={<ProductForm />} />
//               <Route path="/ProductDelete" element={<ProductDelete />} />
//               <Route path="/ProductEdit" element={<ProductEdit />} />
//               <Route path="/cart" element={<Cart />} />
//             </Routes>
//           </div>
//           <div className="col"></div>
//         </div>
//       </div>
//     </CartProvider>
//   );
// }

// export default Apps;
import React from 'react';
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/cartContext';
import { Navbar, Container, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import Header from './components/Header';
import Home from "./Components/Home";
import Cart from './Components/Cart';
import CustomerList from './Components/Customer/CustomerList';
import CustomerForm from './Components/Customer/CustomerForm';
import CustomerEdit from './Components/Customer/CustomerEdit';
import CustomerDelete from './Components/Customer/CustomerDelete';
import ProductList from './Components/Products/ProductList';
import ProductForm from './Components/Products/ProductForm';
import ProductEdit from './Components/Products/ProductEdit';
import ProductDelete from './Components/Products/ProductDelete';

// Now your main component
function Apps() {
  return (
    <CartProvider>
      <div className="container-fluid p-0"> {/* Add 'p-0' to remove default padding */}
        <div className="flex-row">
          {/* Remove extra columns */}
          {/* Apply a separate background color to the navbar */}
          <Navbar expand="lg" bg="primary" variant="dark" style={{ borderBottom: '1px solid #ccc', width: '100%' }}>
            <Container fluid> {/* Set fluid attribute to make the container fit the width of its parent */}
              <Navbar.Brand href="#">GK Inventory Billing App</Navbar.Brand>
              <Navbar.Toggle aria-controls="navbarNavDropdown" />
              <Navbar.Collapse id="navbarNavDropdown">
                <Nav className="me-auto mb-2 mb-lg-0">
                  <Link to="/" className="nav-link">Home</Link>
                  <Link to="/" className="nav-link">Invoice</Link>


                  <NavDropdown title="Products" id="navbarScrollingDropdown">
                    <Link to="/ProductList" className="dropdown-item">View Products</Link>
                    <Link to="/ProductForm" className="dropdown-item">Create a New Product</Link>
                    <Link to="/ProductEdit" className="dropdown-item">Edit / Update a Product</Link>
                    <Link to="/ProductDelete" className="dropdown-item">Delete a Product</Link>
                  </NavDropdown>
                  <NavDropdown title="Customers" id="navbarScrollingDropdown">
                    <Link to="/CustomerList" className="dropdown-item">View Customers</Link>
                    <Link to="/CustomerForm" className="dropdown-item">Create a New Customer</Link>
                    <Link to="/EditCustomer" className="dropdown-item">Edit / Update a Customer</Link>
                    <Link to="/DeleteCustomer" className="dropdown-item">Delete a Customer</Link>
                  </NavDropdown>
                </Nav>

                <div style={{ marginRight: '10px' }}>
                  <Header /> {/* Include Header component */}
                </div>

                <Form className="d-flex">
                  <FormControl
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-success">Search</Button>
                </Form>
              </Navbar.Collapse>
            </Container>
          </Navbar>

          {/* Remove extra columns */}
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/CustomerList" element={<CustomerList />} />
          <Route path="/CustomerForm" element={<CustomerForm />} />
          <Route path="/EditCustomer" element={<CustomerEdit />} />
          <Route path="/DeleteCustomer" element={<CustomerDelete />} />
          <Route path="/ProductList" element={<ProductList />} />
          <Route path="/ProductForm" element={<ProductForm />} />
          <Route path="/ProductDelete" element={<ProductDelete />} />
          <Route path="/ProductEdit" element={<ProductEdit />} />
          <Route path="/cart" element={<Cart />} /> {/* Define the route for '/cart' */}
          {/* Add routes for other components */}
        </Routes>
      </div>
    </CartProvider>
  );
}

export default Apps;
