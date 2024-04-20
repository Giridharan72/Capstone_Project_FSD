
// import React, { useContext, useEffect } from 'react';
// import cartContext from '../context/cartContext';
// import { Modal, Button } from 'react-bootstrap'; // Import Modal and Button components from react-bootstrap
// import jsPDF from 'jspdf'; // Import jsPDF for PDF generation

// const Cart = () => {
//     const { isCartOpen, cartItems, toggleCart, removeItem, incrementItem, decrementItem } = useContext(cartContext);

//     // disable the body-scroll when the Cart is open
//     useEffect(() => {
//         const docBody = document.body;
//         isCartOpen ? docBody.classList.add('overflow_hide') : docBody.classList.remove('overflow_hide');
//     }, [isCartOpen]);

//     // closing the Cart on clicking outside of it
//     useEffect(() => {
//         const outsideClose = (e) => {
//             if (e.target.id === 'cart') {
//                 toggleCart(false);
//             }
//         };
//         window.addEventListener('click', outsideClose);
//         return () => {
//             window.removeEventListener('click', outsideClose);
//         };
//     }, [toggleCart]);

//     const cartQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);

//     const cartTotal = cartItems.reduce((total, item) => {
//         const itemPrice = typeof item.price === 'number' ? item.price : 0;
//         const itemQuantity = typeof item.quantity === 'number' ? item.quantity : 0;
//         return total + (itemPrice * itemQuantity);
//     }, 0);

//     const handlePrint = () => {
//         const printWindow = window.open('', '_blank');
//         printWindow.document.write(`
//             <html>
//                 <head>
//                     <title>Cart Details</title>
//                     <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
//                 </head>
//                 <body>
//                     <div class="container">
//                         <h2>Cart Details</h2>
//                         <hr/>
//                         ${cartItems.map(item => `
//                             <div class="row">
//                                 <div class="col-4">
//                                     <img src="${item.imageUrl}" alt="product-img" width="100">
//                                 </div>
//                                 <div class="col-8">
//                                     <h4>${item.name}</h4>
//                                     <p><strong>Price:</strong> ₹ ${item.price.toLocaleString()}</p>
//                                     <p><strong>Quantity:</strong> ${item.quantity}</p>
//                                 </div>
//                             </div>
//                             <hr/>
//                         `).join('')}
//                         <h3>Total: ₹ ${cartTotal.toLocaleString()}</h3>
//                     </div>
//                 </body>
//             </html>
//         `);
//         printWindow.document.close();
//         printWindow.print();
//     };

//     const handleDownload = () => {
//         const pdf = new jsPDF();
//         const cartDetails = cartItems.map(item => [`Name: ${item.name}`, `Price: ₹ ${item.price.toLocaleString()}`, `Quantity: ${item.quantity}`, '']);
//         cartDetails.push(['Total:', `₹ ${cartTotal.toLocaleString()}`]);

//         pdf.text('Cart Details', 10, 10);
//         pdf.table(10, 20, cartDetails, ['Product', 'Price', 'Quantity', '']);
//         pdf.save('cart_details.pdf');
//     };

//     return (
//         <>
//             <Modal show={isCartOpen} onHide={() => toggleCart(false)} id="cart" dialogClassName="cart-modal">
//                 <Modal.Header closeButton>
//                     <Modal.Title>Cart <small>({cartQuantity})</small></Modal.Title>
//                 </Modal.Header>
//                 <Modal.Body>
//                     {cartQuantity === 0 ? (
//                         <h2>Cart is empty</h2>
//                     ) : (
//                         cartItems.map(item => (
//                             <div className="cart_items" key={item.id}>
//                                 <figure className="cart_items_img">
//                                     <img src={item.imageUrl} alt="product-img" />
//                                 </figure>
//                                 <div className="cart_items_info">
//                                     <h4>{item.name}</h4>
//                                     <h3 className="price">₹ {item.price.toLocaleString()}</h3>
//                                 </div>
//                                 <div className="cart_items_quantity">
//                                     <div className="row">
//                                         <div className="col-3">
//                                             <button className="btn btn-outline-secondary btn-lg" onClick={() => decrementItem(item.id)}>-</button>
//                                         </div>
//                                         <div className="col-6 text-center">
//                                             <b>{item.quantity}</b>
//                                         </div>
//                                         <div className="col-3">
//                                             <button className="btn btn-outline-secondary btn-lg" onClick={() => incrementItem(item.id)}>+</button>
//                                         </div>
//                                     </div>
//                                 </div>
//                                 <div title="Remove Item" className="cart_items_delete">
//                                     <button className="btn btn-outline-danger btn-lg" onClick={() => removeItem(item.id)}>
//                                         <span>&times;</span>
//                                     </button>
//                                 </div>
//                             </div>
//                         ))
//                     )}
//                 </Modal.Body>
//                 <Modal.Footer>
//                     <Button variant="secondary" onClick={handlePrint}>Print</Button>
//                     <Button variant="primary" onClick={handleDownload}>Download as PDF</Button>
//                     <h3>
//                         <small>Total:</small>
//                         <b>₹ {cartTotal.toLocaleString()}</b>
//                     </h3>
//                     <Button variant="primary" disabled={cartQuantity === 0}>
//                         Checkout
//                     </Button>
//                 </Modal.Footer>
//             </Modal>
//         </>
//     );
// };

// export default Cart;
// import React, { useContext, useEffect, useState } from 'react';
// import cartContext from '../context/cartContext';
// import { Modal, Button, Form } from 'react-bootstrap'; // Import Modal, Button, and Form components from react-bootstrap
// import jsPDF from 'jspdf'; // Import jsPDF for PDF generation

// const Cart = () => {
//     const { isCartOpen, cartItems, toggleCart, removeItem, incrementItem, decrementItem } = useContext(cartContext);
//     const [customerId, setCustomerId] = useState('');
//     const [customerDetails, setCustomerDetails] = useState(null);

//     // disable the body-scroll when the Cart is open
//     useEffect(() => {
//         const docBody = document.body;
//         isCartOpen ? docBody.classList.add('overflow_hide') : docBody.classList.remove('overflow_hide');
//     }, [isCartOpen]);

//     const handleCustomerIdChange = (e) => {
//         setCustomerId(e.target.value);
//     };

//     const fetchCustomerDetails = async () => {
//         try {
//             const response = await fetch(`https://capstone-project-qh3r.onrender.com/api/customers/${customerId}`);
//             const data = await response.json();
//             setCustomerDetails(data);
//         } catch (error) {
//             console.error('Error fetching customer details:', error);
//         }
//     };

//     const cartQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);

//     const cartTotal = cartItems.reduce((total, item) => {
//         const itemPrice = typeof item.price === 'number' ? item.price : 0;
//         const itemQuantity = typeof item.quantity === 'number' ? item.quantity : 0;
//         return total + (itemPrice * itemQuantity);
//     }, 0);

//     const handlePrint = () => {
//         const printWindow = window.open('', '_blank');
//         printWindow.document.write(`
//             <html>
//                 <head>
//                     <title>Cart Details</title>
//                     <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
//                     <style>
//                         .cart_items {
//                             display: flex;
//                             align-items: center;
//                             margin-bottom: 20px;
//                         }
//                         .cart_items_img {
//                             flex: 0 0 auto;
//                             margin-right: 20px;
//                         }
//                         .cart_items_info {
//                             flex: 1;
//                         }
//                         .cart_items_info h4 {
//                             text-align: right;
//                         }
//                         .cart_items_info .price {
//                             text-align: right;
//                         }
//                     </style>
//                 </head>
//                 <body>
//                     <div class="container">
//                         <h2>Cart Details</h2>
//                         <hr/>
//                         ${customerDetails ? `
//                             <div>
//                                 <h3>Customer Details:</h3>
//                                 <p><strong>Name:</strong> ${customerDetails.name}</p>
//                                 <p><strong>Phone Number:</strong> ${customerDetails.phoneNumber}</p>
//                                 <p><strong>Email:</strong> ${customerDetails.email}</p>
//                                 <p><strong>Address:</strong> ${customerDetails.address}</p>
//                                 <hr/>
//                             </div>
//                         ` : ''}
//                         <div>
//                             <h3>Cart Items:</h3>
//                             ${cartItems.map(item => `
//                                 <div class="cart_items">
//                                     <div class="cart_items_img">
//                                         <img src="${item.imageUrl}" alt="product-img" width="100">
//                                     </div>
//                                     <div class="cart_items_info">
//                                         <h4>${item.name}</h4>
//                                         <p class="price">₹ ${item.price.toLocaleString()}</p>
//                                     </div>
//                                 </div>
//                                 <hr/>
//                             `).join('')}
//                             <h3>Total: ₹ ${cartTotal.toLocaleString()}</h3>
//                         </div>
//                     </div>
//                 </body>
//             </html>
//         `);
//         printWindow.document.close();
//         printWindow.print();
//     };

//     const handleDownload = () => {
//         const pdf = new jsPDF();
//         const cartDetails = cartItems.map(item => [`Name: ${item.name}`, `Price: ₹ ${item.price.toLocaleString()}`, `Quantity: ${item.quantity}`, '']);
//         cartDetails.push(['Total:', `₹ ${cartTotal.toLocaleString()}`]);

//         pdf.text('Cart Details', 10, 10);
//         pdf.table(10, 20, cartDetails, ['Product', 'Price', 'Quantity', '']);
//         pdf.save('cart_details.pdf');
//     };

//     return (
//         <>
//             <Modal show={isCartOpen} onHide={() => toggleCart(false)} id="cart" dialogClassName="cart-modal">
//                 <Modal.Header closeButton>
//                     <Modal.Title>Cart <small>({cartQuantity})</small></Modal.Title>
//                 </Modal.Header>
//                 <Modal.Body>
//                     <Form.Group controlId="customerId">
//                         <Form.Label>Customer ID</Form.Label>
//                         <Form.Control type="text" value={customerId} onChange={handleCustomerIdChange} />
//                         <Button variant="primary" onClick={fetchCustomerDetails}>Fetch Customer Details</Button>
//                     </Form.Group>
//                     {customerDetails && (
//                         <div>
//                             <h4>Customer Name: {customerDetails.name}</h4>
//                             <p>Phone Number: {customerDetails.phoneNumber}</p>
//                             <p>Email: {customerDetails.email}</p>
//                             <p>Address: {customerDetails.address}</p>
//                         </div>
//                     )}
//                     <hr/>
//                     {cartQuantity === 0 ? (
//                         <h2>Cart is empty</h2>
//                     ) : (
//                         cartItems.map(item => (
//                             <div className="cart_items" key={item.id}>
//                                 <div className="d-flex align-items-center">
//                                     <figure className="cart_items_img">
//                                         <img src={item.imageUrl} alt="product-img" />
//                                     </figure>
//                                     <div className="cart_items_info">
//                                         <h4>{item.name}</h4>
//                                         <p className="price">₹ {item.price.toLocaleString()}</p>
//                                     </div>
//                                 </div>
//                             </div>
//                         ))
//                     )}
//                 </Modal.Body>
//                 <Modal.Footer>
//                     <Button variant="secondary" onClick={handlePrint}>Print</Button>
//                     <Button variant="primary" onClick={handleDownload}>Download as PDF</Button>
//                     <h3>
//                         <small>Total:</small>
//                         <b>₹ {cartTotal.toLocaleString()}</b>
//                     </h3>
//                     <Button variant="primary" disabled={cartQuantity === 0}>
//                         Checkout
//                     </Button>
//                 </Modal.Footer>
//             </Modal>
//         </>
//     );
// };

// export default Cart;

// import React, { useContext, useEffect, useState } from 'react';
// import cartContext from '../context/cartContext';
// import { Modal, Button, Form } from 'react-bootstrap'; // Import Modal, Button, and Form components from react-bootstrap
// import jsPDF from 'jspdf'; // Import jsPDF for PDF generation

// const Cart = () => {
//     const { isCartOpen, cartItems, toggleCart, removeItem, incrementItem, decrementItem } = useContext(cartContext);
//     const [customerId, setCustomerId] = useState('');
//     const [customerDetails, setCustomerDetails] = useState(null);

//     // disable the body-scroll when the Cart is open
//     useEffect(() => {
//         const docBody = document.body;
//         isCartOpen ? docBody.classList.add('overflow_hide') : docBody.classList.remove('overflow_hide');
//     }, [isCartOpen]);

//     const handleCustomerIdChange = (e) => {
//         setCustomerId(e.target.value);
//     };

//     const fetchCustomerDetails = async () => {
//         try {
//             const response = await fetch(`https://capstone-project-qh3r.onrender.com/api/customers/${customerId}`);
//             const data = await response.json();
//             setCustomerDetails(data);
//         } catch (error) {
//             console.error('Error fetching customer details:', error);
//         }
//     };

//     const cartQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);

//     const cartTotal = cartItems.reduce((total, item) => {
//         const itemPrice = typeof item.price === 'number' ? item.price : 0;
//         const itemQuantity = typeof item.quantity === 'number' ? item.quantity : 0;
//         return total + (itemPrice * itemQuantity);
//     }, 0);

//     const handlePrint = () => {
//         const printWindow = window.open('', '_blank');
//         printWindow.document.write(`
//             <html>
//                 <head>
//                     <title>Cart Details</title>
//                     <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
//                     <style>
//                         .cart_items {
//                             display: flex;
//                             align-items: center;
//                             margin-bottom: 20px;
//                         }
//                         .cart_items_img {
//                             flex: 0 0 auto;
//                             margin-right: 20px;
//                         }
//                         .cart_items_info {
//                             flex: 1;
//                         }
//                         .cart_items_info h4 {
//                             text-align: right;
//                         }
//                         .cart_items_info .price {
//                             text-align: right;
//                         }
//                         .quantity {
//                             text-align: right;
//                         }
//                         .Total{
//                             text-align:right;
//                         }
//                     </style>
//                 </head>
//                 <body>
//                     <div class="container">
//                         <h2>Cart Details</h2>
//                         <hr/>
//                         ${customerDetails ? `
//                             <div>
//                                 <h3>Customer Details:</h3>
//                                 <p><strong>Name:</strong> ${customerDetails.name}</p>
//                                 <p><strong>Phone Number:</strong> ${customerDetails.phoneNumber}</p>
//                                 <p><strong>Email:</strong> ${customerDetails.email}</p>
//                                 <p><strong>Address:</strong> ${customerDetails.address}</p>
//                                 <hr/>
//                             </div>
//                         ` : ''}
//                         <div>
//                             <h3>Cart Items:</h3>
//                             ${cartItems.map(item => `
//                                 <div class="cart_items">
//                                     <div class="cart_items_img">
//                                         <img src="${item.imageUrl}" alt="product-img" width="100">
//                                     </div>
//                                     <div class="cart_items_info">
//                                         <h4>${item.name}</h4>
//                                         <p class="price">₹ ${item.price.toLocaleString()}</p>
//                                         <p class="quantity">Quantity: ${item.quantity}</p> <!-- Align quantity to left -->
//                                     </div>
//                                 </div>
//                                 <hr/>
//                             `).join('')}
//                             <h3 class="Total">Total: ₹ ${cartTotal.toLocaleString()}</h3>
//                         </div>
//                     </div>
//                 </body>
//             </html>
//         `);
//         printWindow.document.close();
//         printWindow.print();
//     };
    
//     const handleDownload = () => {
//         const pdf = new jsPDF();
//         const cartDetails = cartItems.map(item => [`Name: ${item.name}`, `Price: ₹ ${item.price.toLocaleString()}`, `Quantity: ${item.quantity}`, '']);
//         cartDetails.push(['Total:', `₹ ${cartTotal.toLocaleString()}`]);

//         pdf.text('Cart Details', 10, 10);
//         pdf.table(10, 20, cartDetails, ['Product', 'Price', 'Quantity', '']);
//         pdf.save('cart_details.pdf');
//     };

//     return (
//         <>
//             <Modal show={isCartOpen} onHide={() => toggleCart(false)} id="cart" dialogClassName="cart-modal">
//                 <Modal.Header closeButton>
//                     <Modal.Title>Cart <small>({cartQuantity})</small></Modal.Title>
//                 </Modal.Header>
//                 <Modal.Body>
//                     <Form.Group controlId="customerId">
//                         <Form.Label>Customer ID</Form.Label>
//                         <Form.Control type="text" value={customerId} onChange={handleCustomerIdChange} />
//                         <Button variant="primary" onClick={fetchCustomerDetails}>Fetch Customer Details</Button>
//                     </Form.Group>
//                     {customerDetails && (
//                         <div>
//                             <h4>Customer Name: {customerDetails.name}</h4>
//                             <p>Phone Number: {customerDetails.phoneNumber}</p>
//                             <p>Email: {customerDetails.email}</p>
//                             <p>Address: {customerDetails.address}</p>
//                         </div>
//                     )}
//                     <hr/>
//                     {cartQuantity === 0 ? (
//                         <h2>Cart is empty</h2>
//                     ) : (
//                         cartItems.map(item => (
//                             <div className="cart_items" key={item.id}>
//                                 <div className="d-flex align-items-center">
//                                     <figure className="cart_items_img">
//                                         <img src={item.imageUrl} alt="product-img" />
//                                     </figure>
//                                     <div className="cart_items_info">
//                                         <h4>{item.name}</h4>
//                                         <p className="price">₹ {item.price.toLocaleString()}</p>
//                                         <div className="d-flex">
//                                             <Button variant="outline-primary" onClick={() => incrementItem(item.id)}>+</Button>
//                                             <span className="mx-2">{item.quantity}</span>
//                                             <Button variant="outline-primary" onClick={() => decrementItem(item.id)}>-</Button>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         ))
//                     )}
//                 </Modal.Body>
//                 <Modal.Footer>
//                     <Button variant="secondary" onClick={handlePrint}>Print</Button>
//                     <Button variant="primary" onClick={handleDownload}>Download as PDF</Button>
//                     <h3>
//                         <small>Total:</small>
//                         <b>₹ {cartTotal.toLocaleString()}</b>
//                     </h3>
//                     <Button variant="primary" disabled={cartQuantity === 0}>
//                         Checkout
//                     </Button>
//                 </Modal.Footer>
//             </Modal>
//         </>
//     );
// };

// export default Cart;


// import React, { useContext, useEffect, useState } from 'react';
// import cartContext from '../context/cartContext';
// import { Modal, Button, Form } from 'react-bootstrap'; // Import Modal, Button, and Form components from react-bootstrap
// import jsPDF from 'jspdf'; // Import jsPDF for PDF generation
// import './login/Login.css'

// const Cart = () => {
//     const { isCartOpen, cartItems, toggleCart, removeItem, incrementItem, decrementItem } = useContext(cartContext);
//     const [customerId, setCustomerId] = useState('');
//     const [customerDetails, setCustomerDetails] = useState(null);

//     // disable the body-scroll when the Cart is open
//     useEffect(() => {
//         const docBody = document.body;
//         isCartOpen ? docBody.classList.add('overflow_hide') : docBody.classList.remove('overflow_hide');
//     }, [isCartOpen]);

//     const handleCustomerIdChange = (e) => {
//         setCustomerId(e.target.value);
//     };

//     const fetchCustomerDetails = async () => {
//         try {
//             const response = await fetch(`https://capstone-project-qh3r.onrender.com/api/customers/${customerId}`);
//             const data = await response.json();
//             setCustomerDetails(data);
//         } catch (error) {
//             console.error('Error fetching customer details:', error);
//         }
//     };

//     const cartQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);

//     const cartTotal = cartItems.reduce((total, item) => {
//         const itemPrice = typeof item.price === 'number' ? item.price : 0;
//         const itemQuantity = typeof item.quantity === 'number' ? item.quantity : 0;
//         return total + (itemPrice * itemQuantity);
//     }, 0);

//     const handlePrint = () => {
//         // your print logic
//         const printWindow = window.open('', '_blank');
//         printWindow.document.write(`
//             <html>
//                 <head>
//                     <title>Cart Details</title>
//                     <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
//                     <style>
//                         .cart_items {
//                             display: flex;
//                             align-items: center;
//                             margin-bottom: 20px;
//                         }
//                         .cart_items_img {
//                             flex: 0 0 auto;
//                             margin-right: 20px;
//                         }
//                         .cart_items_info {
//                             flex: 1;
//                         }
//                         .cart_items_info h4 {
//                             text-align: right;
//                         }
//                         .cart_items_info .price {
//                             text-align: right;
//                         }
//                         .quantity {
//                             text-align: right;
//                         }
//                         .Total{
//                             text-align:right;
//                         }
//                     </style>
//                 </head>
//                 <body>
//                     <div class="container">
//                         <h2>Cart Details</h2>
//                         <hr/>
//                         ${customerDetails ? `
//                             <div>
//                                 <h3>Customer Details:</h3>
//                                 <p><strong>Name:</strong> ${customerDetails.name}</p>
//                                 <p><strong>Phone Number:</strong> ${customerDetails.phoneNumber}</p>
//                                 <p><strong>Email:</strong> ${customerDetails.email}</p>
//                                 <p><strong>Address:</strong> ${customerDetails.address}</p>
//                                 <hr/>
//                             </div>
//                         ` : ''}
//                         <div>
//                             <h3>Cart Items:</h3>
//                             ${cartItems.map(item => `
//                                 <div class="cart_items">
//                                     <div class="cart_items_img">
//                                         <img src="${item.imageUrl}" alt="product-img" width="100">
//                                     </div>
//                                     <div class="cart_items_info">
//                                         <h4>${item.name}</h4>
//                                         <p class="price">₹ ${item.price.toLocaleString()}</p>
//                                         <p class="quantity">Quantity: ${item.quantity}</p> <!-- Align quantity to left -->
//                                     </div>
//                                 </div>
//                                 <hr/>
//                             `).join('')}
//                             <h3 class="Total">Total: ₹ ${cartTotal.toLocaleString()}</h3>
//                         </div>
//                     </div>
//                 </body>
//             </html>
//         `);
//         printWindow.document.close();
//         printWindow.print();
//     };
    
//     const handleDownload = () => {
//         // your download logic
//         const pdf = new jsPDF();
//         const cartDetails = cartItems.map(item => [`Name: ${item.name}`, `Price: ₹ ${item.price.toLocaleString()}`, `Quantity: ${item.quantity}`, '']);
//         cartDetails.push(['Total:', `₹ ${cartTotal.toLocaleString()}`]);

//         pdf.text('Cart Details', 10, 10);
//         pdf.table(10, 20, cartDetails, ['Product', 'Price', 'Quantity', '']);
//         pdf.save('cart_details.pdf');
//     };

//     return (
//         <>
//             <Modal show={isCartOpen} onHide={() => toggleCart(false)} id="cart" dialogClassName="cart-modal-lg"> {/* Change dialogClassName to cart-modal-lg */}
//                 <Modal.Header closeButton>
//                     <Modal.Title>Cart <small>({cartQuantity})</small></Modal.Title>
//                 </Modal.Header>
//                 <Modal.Body>
//                 <Form.Group controlId="customerId">
//                         <Form.Label>Customer ID</Form.Label>
//                         <Form.Control type="text" value={customerId} onChange={handleCustomerIdChange} />
//                         <Button variant="primary" onClick={fetchCustomerDetails}>Fetch Customer Details</Button>
//                     </Form.Group>
//                     {customerDetails && (
//                         <div>
//                             <h4>Customer Name: {customerDetails.name}</h4>
//                             <p>Phone Number: {customerDetails.phoneNumber}</p>
//                             <p>Email: {customerDetails.email}</p>
//                             <p>Address: {customerDetails.address}</p>
//                         </div>
//                     )}
//                     <hr/>
//                     {cartQuantity === 0 ? (
//                         <h2>Cart is empty</h2>
//                     ) : (
//                         cartItems.map(item => (
//                             <div className="cart_items" key={item.id}>
//                                 <div className="d-flex align-items-center">
//                                     <figure className="cart_items_img">
//                                         <img src={item.imageUrl} alt="product-img" />
//                                     </figure>
//                                     <div className="cart_items_info">
//                                         <h4>{item.name}</h4>
//                                         <p className="price">₹ {item.price.toLocaleString()}</p>
//                                         <div className="d-flex">
//                                             <Button variant="outline-primary" onClick={() => incrementItem(item.id)}>+</Button>
//                                             <span className="mx-2">{item.quantity}</span>
//                                             <Button variant="outline-primary" onClick={() => decrementItem(item.id)}>-</Button>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         ))
//                     )}
//                 </Modal.Body>
//                 <Modal.Footer>
//                     <Button variant="secondary" onClick={handlePrint}>Print</Button>
//                     <Button variant="primary" onClick={handleDownload}>Download as PDF</Button>
//                     <h3>
//                         <small>Total:</small>
//                         <b>₹ {cartTotal.toLocaleString()}</b>
//                     </h3>
//                     <Button variant="primary" disabled={cartQuantity === 0}>
//                         Checkout
//                     </Button>
//                 </Modal.Footer>
//             </Modal>
//         </>
//     );
// };

// export default Cart;
// import React, { useContext, useEffect, useState } from 'react';
// import cartContext from '../context/cartContext';
// import { Modal, Button, Form } from 'react-bootstrap';
// import jsPDF from 'jspdf';

// const Cart = () => {
//     const { isCartOpen, cartItems, toggleCart, removeItem, incrementItem, decrementItem } = useContext(cartContext);
//     const [customerId, setCustomerId] = useState('');
//     const [customerDetails, setCustomerDetails] = useState(null);

//     useEffect(() => {
//         const docBody = document.body;
//         isCartOpen ? docBody.classList.add('overflow_hide') : docBody.classList.remove('overflow_hide');
//     }, [isCartOpen]);

//     const handleCustomerIdChange = (e) => {
//         setCustomerId(e.target.value);
//     };

//     const fetchCustomerDetails = async () => {
//         try {
//             const response = await fetch(`https://capstone-project-qh3r.onrender.com/api/customers/${customerId}`);
//             const data = await response.json();
//             setCustomerDetails(data);
//         } catch (error) {
//             console.error('Error fetching customer details:', error);
//         }
//     };

//     const cartQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);

//     const cartTotal = cartItems.reduce((total, item) => {
//         const itemPrice = typeof item.price === 'number' ? item.price : 0;
//         const itemQuantity = typeof item.quantity === 'number' ? item.quantity : 0;
//         return total + (itemPrice * itemQuantity);
//     }, 0);

//     const handlePrint = () => {
        // const printWindow = window.open('', '_blank');
        // printWindow.document.write(`
        //     <html>
        //         <head>
        //             <title>Cart Details</title>
        //             <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
        //             <style>
        //                 body {
        //                     margin: 0;
        //                     padding: 0;
        //                     text-align: left;
        //                     width: 800px; /* Change the width as needed */
        //                     margin: auto; /* Center the content horizontally */
        //                 }
        //                 .container {
        //                     width: 100%;
        //                     padding: 20px;
        //                 }
        //                 .cart_items_info {
        //                     text-align: left;
        //                 }
        //                 .quantity {
        //                     text-align: left;
        //                 }
        //                 .Total {
        //                     text-align: left;
        //                 }
        //             </style>
        //         </head>
        //         <body>
        //             <div class="container">
        //                 <h2>Cart Details</h2>
        //                 <hr/>
        //                 ${customerDetails ? `
        //                     <div>
        //                         <h3>Customer Details:</h3>
        //                         <p><strong>Name:</strong> ${customerDetails.name}</p>
        //                         <p><strong>Phone Number:</strong> ${customerDetails.phoneNumber}</p>
        //                         <p><strong>Email:</strong> ${customerDetails.email}</p>
        //                         <p><strong>Address:</strong> ${customerDetails.address}</p>
        //                         <hr/>
        //                     </div>
        //                 ` : ''}
        //                 <div>
        //                     <h3>Cart Items:</h3>
        //                     ${cartItems.map(item => `
        //                         <div class="cart_items">
        //                             <div class="cart_items_img">
        //                                 <img src="${item.imageUrl}" alt="product-img" width="100">
        //                             </div>
        //                             <div class="cart_items_info">
        //                                 <h4>${item.name}</h4>
        //                                 <p class="price">₹ ${item.price.toLocaleString()}</p>
        //                                 <p class="quantity">Quantity: ${item.quantity}</p>
        //                             </div>
        //                         </div>
        //                         <hr/>
        //                     `).join('')}
        //                     <h3 class="Total">Total: ₹ ${cartTotal.toLocaleString()}</h3>
        //                 </div>
        //             </div>
        //         </body>
        //     </html>
        // `);
        // printWindow.document.close();
        // printWindow.print();
//     };
    
//     const handleDownload = () => {
        // const pdf = new jsPDF();
        // const cartDetails = cartItems.map(item => [`Name: ${item.name}`, `Price: ₹ ${item.price.toLocaleString()}`, `Quantity: ${item.quantity}`, '']);
        // cartDetails.push(['Total:', `₹ ${cartTotal.toLocaleString()}`]);

        // pdf.text('Cart Details', 10, 10);
        // pdf.table(10, 20, cartDetails, ['Product', 'Price', 'Quantity', '']);
        // pdf.save('cart_details.pdf');
//     };

//     return (
//         <>
//             <Modal show={isCartOpen} onHide={() => toggleCart(false)} id="cart" dialogClassName="cart-modal">
//                 <Modal.Header closeButton>
//                     <Modal.Title>Cart <small>({cartQuantity})</small></Modal.Title>
//                 </Modal.Header>
//                 <Modal.Body>
//                     <Form.Group controlId="customerId">
//                         <Form.Label>Customer ID</Form.Label>
//                         <Form.Control type="text" value={customerId} onChange={handleCustomerIdChange} />
//                         <Button variant="primary" onClick={fetchCustomerDetails}>Fetch Customer Details</Button>
//                     </Form.Group>
//                     {customerDetails && (
//                         <div>
//                             <h4>Customer Name: {customerDetails.name}</h4>
//                             <p>Phone Number: {customerDetails.phoneNumber}</p>
//                             <p>Email: {customerDetails.email}</p>
//                             <p>Address: {customerDetails.address}</p>
//                         </div>
//                     )}
//                     <hr/>
//                     {cartQuantity === 0 ? (
//                         <h2>Cart is empty</h2>
//                     ) : (
//                         cartItems.map(item => (
//                             <div className="cart_items" key={item.id}>
//                                 <div className="d-flex align-items-center">
//                                     <figure className="cart_items_img">
//                                         <img src={item.imageUrl} alt="product-img" />
//                                     </figure>
//                                     <div className="cart_items_info">
//                                         <h4>{item.name}</h4>
//                                         <p className="price">₹ {item.price.toLocaleString()}</p>
//                                         <div className="d-flex">
//                                             <Button variant="outline-primary" onClick={() => incrementItem(item.id)}>+</Button>
//                                             <span className="mx-2">{item.quantity}</span>
//                                             <Button variant="outline-primary" onClick={() => decrementItem(item.id)}>-</Button>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         ))
//                     )}
//                 </Modal.Body>
//                 <Modal.Footer>
//                     <Button variant="secondary" onClick={handlePrint}>Print</Button>
//                     <Button variant="primary" onClick={handleDownload}>Download as PDF</Button>
//                     <h3>
//                         <small>Total:</small>
//                         <b>₹ {cartTotal.toLocaleString()}</b>
//                     </h3>
//                     <Button variant="primary" disabled={cartQuantity === 0}>
//                         Checkout
//                     </Button>
//                 </Modal.Footer>
//             </Modal>
//         </>
//     );
// };

// export default Cart;


// import React, { useContext, useEffect, useState } from 'react';
// import cartContext from '../context/cartContext';
// import { Button, Form } from 'react-bootstrap';
// import jsPDF from 'jspdf';

// const Cart = () => {
//     const { cartItems, removeItem, incrementItem, decrementItem } = useContext(cartContext);
//     const [customerId, setCustomerId] = useState('');
//     const [customerDetails, setCustomerDetails] = useState(null);

//     const handleCustomerIdChange = (e) => {
//         setCustomerId(e.target.value);
//     };

//     const fetchCustomerDetails = async () => {
//         try {
//             const response = await fetch(`https://capstone-project-qh3r.onrender.com/api/customers/${customerId}`);
//             const data = await response.json();
//             setCustomerDetails(data);
//         } catch (error) {
//             console.error('Error fetching customer details:', error);
//         }
//     };

//     const cartQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);

//     const cartTotal = cartItems.reduce((total, item) => {
//         const itemPrice = typeof item.price === 'number' ? item.price : 0;
//         const itemQuantity = typeof item.quantity === 'number' ? item.quantity : 0;
//         return total + (itemPrice * itemQuantity);
//     }, 0);

//     const handlePrint = () => {
//         // Print functionality
//     };
    
//     const handleDownload = () => {
//         // PDF download functionality
//     };

//     return (
//         <div className="container">
//             <h2>Cart Details</h2>
//             <hr />
//             <Form.Group controlId="customerId">
//                 <Form.Label>Customer ID</Form.Label>
//                 <Form.Control type="text" value={customerId} onChange={handleCustomerIdChange} />
//                 <Button variant="primary" onClick={fetchCustomerDetails}>Fetch Customer Details</Button>
//             </Form.Group>
//             {customerDetails && (
//                 <div>
//                     <h4>Customer Name: {customerDetails.name}</h4>
//                     <p>Phone Number: {customerDetails.phoneNumber}</p>
//                     <p>Email: {customerDetails.email}</p>
//                     <p>Address: {customerDetails.address}</p>
//                 </div>
//             )}
//             <hr />
//             {cartQuantity === 0 ? (
//                 <h2>Cart is empty</h2>
//             ) : (
//                 cartItems.map(item => (
//                     <div className="cart_items" key={item.id}>
//                         <div className="d-flex align-items-center">
//                             <figure className="cart_items_img">
//                                 <img src={item.imageUrl} alt="product-img" />
//                             </figure>
//                             <div className="cart_items_info">
//                                 <h4>{item.name}</h4>
//                                 <p className="price">₹ {item.price.toLocaleString()}</p>
//                             </div>
//                             <div className="cart_items_actions">
//                                 <Button variant="outline-primary" onClick={() => incrementItem(item.id)}>+</Button>
//                                 <span className="mx-2">{item.quantity}</span>
//                                 <Button variant="outline-primary" onClick={() => decrementItem(item.id)}>-</Button>
//                             </div>
//                         </div>
//                     </div>
//                 ))
//             )}
//             <div className="cart_summary">
//                 <Button variant="secondary" onClick={handlePrint}>Print</Button>
//                 <Button variant="primary" onClick={handleDownload}>Download as PDF</Button>
//                 <h3>
//                     <small>Total:</small>
//                     <b>₹ {cartTotal.toLocaleString()}</b>
//                 </h3>
//                 <Button variant="primary" disabled={cartQuantity === 0}>
//                     Checkout
//                 </Button>
//             </div>
//         </div>
//     );
// };

// export default Cart;

// import React, { useContext, useState } from 'react';
// import cartContext from '../context/cartContext';
// import { Button, Form } from 'react-bootstrap';
// import jsPDF from 'jspdf';
// import '../App.css'

// const Cart = () => {
//     const { cartItems, removeItem, incrementItem, decrementItem } = useContext(cartContext);
//     const [customerId, setCustomerId] = useState('65e758dbe54394af494031d2');
//     const [customerDetails, setCustomerDetails] = useState(null);

//     const handleCustomerIdChange = (e) => {
//         setCustomerId(e.target.value);
//     };

//     const fetchCustomerDetails = async () => {
//         try {
//             const response = await fetch(`https://capstone-project-qh3r.onrender.com/api/customers/${customerId}`);
//             const data = await response.json();
//             setCustomerDetails(data);
//         } catch (error) {
//             console.error('Error fetching customer details:', error);
//         }
//     };

//     const cartQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);

//     const cartTotal = cartItems.reduce((total, item) => {
//         const itemPrice = typeof item.price === 'number' ? item.price : 0;
//         const itemQuantity = typeof item.quantity === 'number' ? item.quantity : 0;
//         return total + itemPrice * itemQuantity;
//     }, 0);

//     const handlePrint = () => {
//         // Print functionality
        // const printWindow = window.open('', '_blank');
        // printWindow.document.write(`
        //     <html>
        //         <head>
        //             <title>Cart Details</title>
        //             <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
        //             <style>
        //                 .cart_items {
        //                     display: flex;
        //                     align-items: center;
        //                     margin-bottom: 20px;
        //                 }
        //                 .cart_items_img {
        //                     flex: 0 0 auto;
        //                     margin-right: 20px;
        //                 }
        //                 .cart_items_info {
        //                     flex: 1;
        //                 }
        //                 .cart_items_info h4 {
        //                     text-align: right;
        //                 }
        //                 .cart_items_info .price {
        //                     text-align: right;
        //                 }
        //                 .quantity {
        //                     text-align: right;
        //                 }
        //                 .Total{
        //                     text-align:right;
        //                 }
        //             </style>
        //         </head>
        //         <body>
        //             <div class="container">
        //                 <h2>Cart Details</h2>
        //                 <hr/>
        //                 ${customerDetails ? `
        //                     <div>
        //                         <h3>Customer Details:</h3>
        //                         <p><strong>Name:</strong> ${customerDetails.name}</p>
        //                         <p><strong>Phone Number:</strong> ${customerDetails.phoneNumber}</p>
        //                         <p><strong>Email:</strong> ${customerDetails.email}</p>
        //                         <p><strong>Address:</strong> ${customerDetails.address}</p>
        //                         <hr/>
        //                     </div>
        //                 ` : ''}
        //                 <div>
        //                     <h3>Cart Items:</h3>
        //                     ${cartItems.map(item => `
        //                         <div class="cart_items">
        //                             <div class="cart_items_img">
        //                                 <img src="${item.imageUrl}" alt="product-img" width="100">
        //                             </div>
        //                             <div class="cart_items_info">
        //                                 <h4>${item.name}</h4>
        //                                 <p class="price">₹ ${item.price.toLocaleString()}</p>
        //                                 <p class="quantity">Quantity: ${item.quantity}</p> <!-- Align quantity to left -->
        //                             </div>
        //                         </div>
        //                         <hr/>
        //                     `).join('')}
        //                     <h3 class="Total">Total: ₹ ${cartTotal.toLocaleString()}</h3>
        //                 </div>
        //             </div>
        //         </body>
        //     </html>
        // `);
        // printWindow.document.close();
        // printWindow.print();
        
//     };
    
//     const handleDownload = () => {
//         // PDF download functionality
//         const pdf = new jsPDF();
//         const cartDetails = cartItems.map(item => [`Name: ${item.name}`, `Price: ₹ ${item.price.toLocaleString()}`, `Quantity: ${item.quantity}`, '']);
//         cartDetails.push(['Total:', `₹ ${cartTotal.toLocaleString()}`]);

//         pdf.text('Cart Details', 10, 10);
//         pdf.table(10, 20, cartDetails, ['Product', 'Price', 'Quantity', '']);
//         pdf.save('cart_details.pdf');
//     };

//     return (
//         <div className="container">
//             <h2>Cart Details</h2>
//             <hr />
//             <Form.Group controlId="customerId">
//     <Form.Label>Customer ID</Form.Label>
//     <Form.Control type="text" value={customerId} onChange={handleCustomerIdChange} />
//     <Button variant="primary" onClick={fetchCustomerDetails} style={{ marginTop: '10px' }}>Fetch Customer Details</Button>
// </Form.Group>

//             {customerDetails && (
//                 <div>
//                     <h4>Customer Name: {customerDetails.name}</h4>
//                     <p>Phone Number: {customerDetails.phoneNumber}</p>
//                     <p>Email: {customerDetails.email}</p>
//                     <p>Address: {customerDetails.address}</p>
//                 </div>
//             )}
//             <hr />
//             {cartQuantity === 0 ? (
//                 <h2>Cart is empty</h2>
//             ) : (
//                 <div>
//                     {cartItems.map(item => (
//                         <div className="cart_item" key={item.id}>
//                             <div className="item_left">
//                                 <img src={item.imageUrl} alt="product-img" />
//                             </div>
//                             <div className="item_right">
//                                 <div className="item_details">
//                                     <h4>{item.name}</h4>
//                                     <p className="price">₹ {item.price.toLocaleString()}</p>
//                                 </div>
//                                 <div className="item_actions">
//                                     <Button variant="outline-primary" onClick={() => decrementItem(item.id)}>-</Button>
//                                     <span>{item.quantity}</span>
//                                     <Button variant="outline-primary" onClick={() => incrementItem(item.id)}>+</Button>
//                                     <Button variant="danger" onClick={() => removeItem(item.id)}>Remove</Button>
//                                 </div>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             )}
//             <hr />
//             <div className="cart_summary">
                
                
//                 <div className="button_container">
//     <Button variant="secondary" onClick={handlePrint}>Print</Button>
//     <Button variant="primary" disabled={cartQuantity === 0}>Checkout</Button>
// </div>

//                 <h3>Total: ₹ {cartTotal.toLocaleString()}</h3>
//             </div>
//         </div>
//     );
// };

// export default Cart;

import React, { useContext, useState } from 'react';
import cartContext from '../context/cartContext';
import { Button, Form } from 'react-bootstrap';
import jsPDF from 'jspdf';
import '../App.css'

const Cart = () => {
    const { cartItems, removeItem, incrementItem, decrementItem } = useContext(cartContext);
    const [customerId, setCustomerId] = useState('65e758dbe54394af494031d2');
    const [customerDetails, setCustomerDetails] = useState(null);
    const [discount, setDiscount] = useState(0);

    const handleCustomerIdChange = (e) => {
        setCustomerId(e.target.value);
    };

    const fetchCustomerDetails = async () => {
        try {
            const response = await fetch(`https://capstone-project-qh3r.onrender.com/api/customers/${customerId}`);
            const data = await response.json();
            setCustomerDetails(data);
        } catch (error) {
            console.error('Error fetching customer details:', error);
        }
    };

    const cartQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);

    const cartSubtotal = cartItems.reduce((total, item) => {
        const itemPrice = typeof item.price === 'number' ? item.price : 0;
        const itemQuantity = typeof item.quantity === 'number' ? item.quantity : 0;
        return total + itemPrice * itemQuantity;
    }, 0);

    const discountAmount = cartSubtotal * (discount / 100);
    const cartTotalBeforeGST = cartSubtotal - discountAmount;
    const GST = cartTotalBeforeGST * 0.05;
    const cartTotal = cartTotalBeforeGST + GST;

    const handlePrint = () => {
        const printWindow = window.open('', '_blank');
        printWindow.document.write(`
            <html>
                <head>
                    <title>Cart Details</title>
                    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
                    <style>
                        .cart_items {
                            display: flex;
                            align-items: center;
                            margin-bottom: 20px;
                        }
                        .cart_items_img {
                            flex: 0 0 auto;
                            margin-right: 20px;
                        }
                        .cart_items_info {
                            flex: 1;
                        }
                        .cart_items_info h4 {
                            text-align: right;
                        }
                        .cart_items_info .price {
                            text-align: right;
                        }
                        .quantity {
                            text-align: right;
                        }
                        .Total{
                            text-align:right;
                        }
                        .Subtotal{
                            text-align:right;
                        }
                        .Discount{

                        }
                    </style>
                </head>
                <body>
                    <div class="container">
                        <h2>Cart Details</h2>
                        <hr/>
                        ${customerDetails ? `
                            <div>
                                <h3>Customer Details:</h3>
                                <p><strong>Name:</strong> ${customerDetails.name}</p>
                                <p><strong>Phone Number:</strong> ${customerDetails.phoneNumber}</p>
                                <p><strong>Email:</strong> ${customerDetails.email}</p>
                                <p><strong>Address:</strong> ${customerDetails.address}</p>
                                <hr/>
                            </div>
                        ` : ''}
                        <div>
                            <h3>Cart Items:</h3>
                            ${cartItems.map(item => `
                                <div class="cart_items">
                                    <div class="cart_items_img">
                                        <img src="${item.imageUrl}" alt="product-img" width="100">
                                    </div>
                                    <div class="cart_items_info">
                                        <h4>${item.name}</h4>
                                        <p class="price">₹ ${item.price.toLocaleString()}</p>
                                        <p class="quantity">Quantity: ${item.quantity}</p> <!-- Align quantity to left -->
                                    </div>
                                </div>
                                <hr/>
                            `).join('')}
                            <h3 class="Total">Subtotal: ₹ ${cartSubtotal.toLocaleString()}</h3>
                            <h3 class="Total">Discount: ₹ ${discountAmount.toLocaleString()}</h3>
                            <h3 class="Total">GST (5%): ₹ ${GST.toLocaleString()}</h3>
                            <h6 class="Total">-------------------------------------------</h6>
                            <h2 class="Total">Total: ₹ ${cartTotal.toLocaleString()}</h2>
                        </div>
                    </div>
                </body>
            </html>
        `);
        printWindow.document.close();
        printWindow.print();
        
    };
    
    const handleDownload = () => {
        // PDF download functionality
    };

    return (
        <div className="container">
            <h2>Cart Details</h2>
            <hr />
            <Form.Group controlId="customerId">
                <Form.Label>Customer ID</Form.Label>
                <Form.Control type="text" value={customerId} onChange={handleCustomerIdChange} />
                <Button variant="primary" onClick={fetchCustomerDetails} style={{ marginTop: '10px' }}>Fetch Customer Details</Button>
            </Form.Group>

            {customerDetails && (
                <div>
                    <h4>Customer Name: {customerDetails.name}</h4>
                    <p>Phone Number: {customerDetails.phoneNumber}</p>
                    <p>Email: {customerDetails.email}</p>
                    <p>Address: {customerDetails.address}</p>
                </div>
            )}
            <hr />
            {cartQuantity === 0 ? (
                <h2>Cart is empty</h2>
            ) : (
                <div>
                    {cartItems.map(item => (
                        <div className="cart_item" key={item.id}>
                            <div className="item_left">
                                <img src={item.imageUrl} alt="product-img" />
                            </div>
                            <div className="item_right">
                                <div className="item_details">
                                    <h4>{item.name}</h4>
                                    <p className="price">₹ {item.price.toLocaleString()}</p>
                                </div>
                                <div className="item_actions">
                                    <Button variant="outline-primary" onClick={() => decrementItem(item.id)}>-</Button>
                                    <span>{item.quantity}</span>
                                    <Button variant="outline-primary" onClick={() => incrementItem(item.id)}>+</Button>
                                    <Button variant="danger" onClick={() => removeItem(item.id)}>Remove</Button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
            <hr />
            <div className="cart_summary">
   
    <div className="button_container">
    
        <Button variant="secondary" onClick={handlePrint}>Print</Button>
        <Button variant="primary" disabled={cartQuantity === 0}>Checkout</Button>
        <label htmlFor="discount">Discount (%):</label>
        <input type="number" id="discount" value={discount} onChange={(e) => setDiscount(parseFloat(e.target.value))} />
    </div>


                <div className="totals">
                    <h3>Subtotal: ₹ {cartSubtotal.toLocaleString()}</h3>
                    <h3>Discount: ₹ {discountAmount.toLocaleString()}</h3>
                    <h3>GST (5%): ₹ {GST.toLocaleString()}</h3>
                    <h6 class="Total">-------------------------------------------</h6>
                    <h2>Total: ₹ {cartTotal.toLocaleString()}</h2>
                </div>
            </div>
        </div>
    );
};

export default Cart;
