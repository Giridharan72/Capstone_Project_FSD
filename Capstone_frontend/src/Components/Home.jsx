// import React, { useState, useEffect } from 'react';
// import ProductsCard from './ProductsCard';

// const Home = () => {
//     const [products, setProducts] = useState([]);

//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 const response = await fetch('https://capstone-project-qh3r.onrender.com/api/products');
//                 const data = await response.json();
//                 setProducts(data);
//             } catch (error) {
//                 console.error('Error fetching data:', error);
//             }
//         };

//         fetchData();
//     }, []);

//     return (
//         <>
//             <section id="home">
//                 <div className="container">
//                     <div className="home_content">
//                         {products.map((item) => (
//                             <ProductsCard key={item._id} {...item} />
//                         ))}
//                     </div>
//                 </div>
//             </section>
//         </>
//     );
// };

// export default Home;
// import React, { useState, useEffect } from 'react';
// import ProductsCard from './ProductsCard';
// import { Container, Row, Col } from 'react-bootstrap';

// const Home = () => {
//     const [products, setProducts] = useState([]);

//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 const response = await fetch('https://capstone-project-qh3r.onrender.com/api/products');
//                 const data = await response.json();
//                 setProducts(data);
//             } catch (error) {
//                 console.error('Error fetching data:', error);
//             }
//         };

//         fetchData();
//     }, []);

//     return (
//         <section id="home">
//             <h1>home</h1>
//             <Container>
//                 <Row>
//                     {products.map((item) => (
//                         <Col key={item._id} xs={12} sm={6} md={4}>
//                             <ProductsCard {...item} />
//                         </Col>
//                     ))}
//                 </Row>
//             </Container>
//         </section>
//     );
// };

// export default Home;
// Inside the Home component
import React, { useState, useEffect } from 'react';
import ProductsCard from './ProductsCard';
import { Container, Row, Col } from 'react-bootstrap';

const Home = ({ isLoggedIn }) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://capstone-project-qh3r.onrender.com/api/products');
                const data = await response.json();
                setProducts(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <section id="home">
            {/* <h1 className="lk">Welcome To the GK Inventory Billing App</h1> */}
            <Container>
                <Row>
                    {products.map((item) => (
                        <Col key={item._id} xs={12} sm={6} md={4}>
                            <ProductsCard {...item} isLoggedIn={isLoggedIn} />
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
};

export default Home;
