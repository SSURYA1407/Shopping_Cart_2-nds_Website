// Home.js
import React, { useState } from 'react';
import { Modal, Carousel } from 'react-bootstrap';
import productsData from '../data/productsData';
import ProductsCard from '../components/ProductsCard';
import './Home.css';

const Home = ({ showWishlist, toggleWishlistModal, isMenuOpen }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [wishlist, setWishlist] = useState([]);

    const carouselImages = [
        { id: 1, src: '/images/prod14.png', alt: 'First slide', caption: 'First Slide' },
        { id: 2, src: '/images/prod15.png', alt: 'Second slide', caption: 'Second Slide' },
        { id: 3, src: '/images/tvk3.png', alt: 'Third slide', caption: 'Third Slide' },
        { id: 4, src: '/images/tvk4.png', alt: 'Fourth slide', caption: 'Fourth Slide' },
    ];

    const filteredProducts = productsData.filter((product) =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const toggleWishlistItem = (item) => {
        const isInWishlist = wishlist.some((wishlistItem) => wishlistItem.id === item.id);
        if (isInWishlist) {
            setWishlist(wishlist.filter((wishlistItem) => wishlistItem.id !== item.id));
        } else {
            setWishlist([...wishlist, item]);
        }
    };

    return (
        <section id="home" className={isMenuOpen ? 'side-menu-open' : ''}>
            <Carousel interval={2000}>
                {carouselImages.map((image) => (
                    <Carousel.Item key={image.id}>
                        <img className="d-block w-100 carousel-image" src={image.src} alt={image.alt} />
                        <Carousel.Caption>
                            <h3>{image.caption}</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                ))}
            </Carousel>

            <div className="search-bar">
                <input
                    type="text"
                    placeholder="Search products..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>

            <div className="container">
                <div className="home_content">
                    {filteredProducts.map((item) => (
                        <ProductsCard
                            key={item.id}
                            {...item}
                            isWishlisted={wishlist.some((wishlistItem) => wishlistItem.id === item.id)}
                            onWishlistToggle={toggleWishlistItem}
                        />
                    ))}
                </div>
            </div>

            {/* Wishlist Modal */}
            <Modal show={showWishlist} onHide={toggleWishlistModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Wishlist</Modal.Title>
                </Modal.Header>
                <Modal.Body>
    <div className="wishlist-items">
        {wishlist.length === 0 ? (
            <p>Your wishlist is empty.</p>
        ) : (
            wishlist.map((item) => (
                <div key={item.id} className="wishlist-item">
                    <img src={item.img} alt={item.title} />
                    <div className="wishlist-details">
                        <h4>{item.title}</h4>
                        <p>₹ {item.price}</p>
                    </div>
                    <button
                        className="remove-wishlist-item"
                        onClick={() => toggleWishlistItem(item)}
                    >
                        ×
                    </button>
                </div>
            ))
        )}
    </div>
</Modal.Body>

                <Modal.Footer>
                    <button onClick={toggleWishlistModal}>Close</button>
                </Modal.Footer>
            </Modal>
        </section>
    );
};

export default Home;
