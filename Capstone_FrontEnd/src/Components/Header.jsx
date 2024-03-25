// import React, { useContext } from 'react';
// import cartContext from '../context/cartContext';


// const Header = () => {

//     const { cartItems, toggleCart } = useContext(cartContext);

//     const cartQuantity = cartItems.length;

//     return (
//         <>
            
    
                       
                   
//                             <div
//                                 title="Cart"
//                                 className="cart_icon"
//                                 onClick={() => toggleCart(true)}
//                             >
//                                 <img src="/images/bag-icon.svg" alt="bag-icon" />
//                                 {
//                                     cartQuantity >= 1 && (
//                                         <span className="badge">{cartQuantity}</span>
//                                     )
//                                 }
//                             </div>
                       
//         </>
//     );
// };

// export default Header;

import React, { useContext } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import cartContext from '../context/cartContext';

const Header = () => {
    const { cartItems, toggleCart } = useContext(cartContext);
    const cartQuantity = cartItems.length;

    return (
        <>
            <Link to="/cart" className="nav-link"> {/* Link to '/cart' */}
                <div
                    title="Cart"
                    className="cart_icon"
                    onClick={() => toggleCart(true)}
                >
                    <img src="/images/bag-icon.svg" alt="bag-icon" />
                    {cartQuantity >= 1 && (
                        <span className="badge">{cartQuantity}</span>
                    )}
                </div>
            </Link>
        </>
    );
};

export default Header;
