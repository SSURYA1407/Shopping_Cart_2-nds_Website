// ProductsCard.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../store/slices/cartSlice';
import { FaHeart, FaRegHeart } from 'react-icons/fa';

const ProductsCard = (props) => {
    const { img, rating, title, price, id, isWishlisted, onWishlistToggle } = props;
    const [isAdded, setIsAdded] = useState(false);
    const dispatch = useDispatch();

    const handleAddToCart = () => {
        const item = { ...props };
        dispatch(addItem(item));
        setIsAdded(true);
        setTimeout(() => setIsAdded(false), 3000);
    };

    return (
        <div className="product_card">
            <figure>
                <img src={img} alt="item-img" />
            </figure>
            <strong className="rating">{rating}</strong>
            <h4 className="title">{title}</h4>
            <h3 className="price">₹ {price.toLocaleString()}</h3>
            <button
                type="button"
                className={`btn ${isAdded ? 'added' : ''}`}
                onClick={handleAddToCart}
            >
                {isAdded ? 'Added' : 'Add to cart'}
            </button>
            <button
                className="wishlist-icon"
                onClick={() => onWishlistToggle({ id, img, title, price })}
            >
                {isWishlisted ? <FaHeart className="heart-icon filled" /> : <FaRegHeart className="heart-icon" />}
            </button>
        </div>
    );
};

export default ProductsCard;
