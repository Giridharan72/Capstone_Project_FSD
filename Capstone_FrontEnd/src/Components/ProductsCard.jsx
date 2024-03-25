// import React, { useContext, useState } from 'react';
// import cartContext from '../context/cartContext'
// import '../App.css'


// const ProductsCard = (props) => {
//     const { name, description, price, stockQuantity, imageUrl } = props;

//     const { addItem } = useContext(cartContext);
//     const [isAdded, setIsAdded] = useState(false);

//     const handleAddToCart = () => {
//         const item = { ...props };
//         addItem(item);
//         setIsAdded(true);
//         setTimeout(() => {
//             setIsAdded(false);
//         }, 3000);
//     };

//     // Check if price and stockQuantity are defined before using them
//     const formattedPrice = typeof price === 'number' ? price.toLocaleString() : 'Price not available';
//     const stockDisplay = stockQuantity || 'Stock not available';

//     return (
//         <div className="product_card">
//             <figure>
//                 <img src={imageUrl} alt="item-img" />
//             </figure>
//             <h4 className="title">{name}</h4>
//             <p className="discount">Discount: {price ? `${price}%` : 'Discount not available'}</p>
//             <p className="stock">Stock: {stockDisplay}</p>
//             <p className="description">{description}</p>
//             <h3 className="price">₹ {formattedPrice}</h3>
//             <button
//                 type="button"
//                 className={`btn ${isAdded ? 'added' : ''}`}
//                 onClick={handleAddToCart}
//             >
//                 {isAdded ? 'Added' : 'Add to cart'}
//             </button>
//         </div>
//     );
// };

// export default ProductsCard;
// import React, { useContext, useState } from 'react';
// import cartContext from '../context/cartContext';
// import '../App.css'; // Import the CSS file

// const ProductsCard = (props) => {
//     const { name, description, price, stockQuantity, imageUrl } = props;

//     const { addItem } = useContext(cartContext);
//     const [isAdded, setIsAdded] = useState(false);

//     const handleAddToCart = () => {
//         const item = { ...props };
//         addItem(item);
//         setIsAdded(true);
//         setTimeout(() => {
//             setIsAdded(false);
//         }, 3000);
//     };

//     // Check if price and stockQuantity are defined before using them
//     const formattedPrice = typeof price === 'number' ? price.toLocaleString() : 'Price not available';
//     const stockDisplay = stockQuantity || 'Stock not available';

//     return (
//         <div className="product_card">
//             <figure>
//                 <img src={imageUrl} alt="item-img" />
//             </figure>
//             <h4 className="title">{name}</h4>
//             <p className="discount">Discount: {price ? `${price}%` : 'Discount not available'}</p>
//             <p className="stock">Stock: {stockDisplay}</p>
//             <p className="description">{description}</p>
//             <h3 className="price">₹ {formattedPrice}</h3>
//             <button
//                 type="button"
//                 className={`btn ${isAdded ? 'added' : ''} add-to-cart-button left`} // Apply classes for button styling and alignment
//                 onClick={handleAddToCart}
//             >
//                 {isAdded ? 'Added' : 'Add to cart'}
//             </button>
//         </div>
//     );
// };

// export default ProductsCard;
import React, { useContext, useState } from 'react';
import cartContext from '../context/cartContext';
import '../App.css'; // Import the CSS file

const ProductsCard = (props) => {
    const { name, description, price, stockQuantity, imageUrl } = props;

    const { addItem } = useContext(cartContext);
    const [isAdded, setIsAdded] = useState(false);
    const [quantity, setQuantity] = useState(stockQuantity); // Initialize quantity state with stockQuantity

    const handleAddToCart = () => {
        const item = { ...props };
        addItem(item);
        setIsAdded(true);
        setTimeout(() => {
            setIsAdded(false);
        }, 3000);

        // Decrease the quantity when adding to cart
        setQuantity(prevQuantity => prevQuantity - 1);
    };

    // Check if price and stockQuantity are defined before using them
    const formattedPrice = typeof price === 'number' ? price.toLocaleString() : 'Price not available';
    const stockDisplay = quantity || 'Stock not available'; // Use quantity instead of stockQuantity

    return (
        <div className="product_card">
            <figure>
                <img src={imageUrl} alt="item-img" />
            </figure>
            <h4 className="title">{name}</h4>
            <p className="discount">Discount: {price ? `${price}%` : 'Discount not available'}</p>
            <p className="stock">Stock: {stockDisplay}</p>
            <p className="description">{description}</p>
            <h3 className="price">₹ {formattedPrice}</h3>
            <button
                type="button"
                className={`btn ${isAdded ? 'added' : ''} add-to-cart-button left`} // Apply classes for button styling and alignment
                onClick={handleAddToCart}
                disabled={quantity <= 0} // Disable button when quantity reaches 0
            >
                {isAdded ? 'Added' : 'Add to cart'}
            </button>
        </div>
    );
};

export default ProductsCard;
