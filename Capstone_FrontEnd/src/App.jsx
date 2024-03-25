import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Register from "./Components/login/Register";
import { Login } from "./Components/login/Login";
import { Forgot } from "./Components/login/Forgot";
import { Reset } from "./Components/login/Reset";
import  Home1  from "./Components/Home1";
import PrivateRouted from "./PrivatedRoute";
import Apps from "./Apps";

function App() {
  return (
    <>
      <BrowserRouter>
      
        <Routes>
          <Route>
          <Route index path="/*" element={<PrivateRouted element={<Apps />} />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/forgot" element={<Forgot />} />
            <Route path="/reset" element={<Reset />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import "./App.css";
// import Register from "./Components/login/Register";
// import { Login } from "./Components/login/Login";
// import { Forgot } from "./Components/login/Forgot";
// import { Reset } from "./Components/login/Reset";
// import  Home1  from "./Components/Home1";
// import PrivateRouted from "./PrivatedRoute";
// import Apps from "./Apps";

// function App() {
//   return (
//     <>
//       <BrowserRouter>
//       <div className="container-fluid">
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
//                     <Link to="/" className="nav-link">Login</Link>
//                     <Link to="/" className="nav-link">Sign</Link>
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
//         <Routes>
//           <Route>
//           <Route index path="/*" element={<PrivateRouted element={<Apps />} />} />
//             <Route path="/register" element={<Register />} />
//             <Route path="/login" element={<Login />} />
//             <Route path="/forgot" element={<Forgot />} />
//             <Route path="/reset" element={<Reset />} />
//           </Route>
//         </Routes>
//         </div>
//       </BrowserRouter>
//     </>
//   );
// }

// export default App;