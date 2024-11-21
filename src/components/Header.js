import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleCart } from '../store/slices/cartSlice';
import { FaHeart, FaBars, FaHome, FaClipboardList, FaChevronDown } from 'react-icons/fa';

const Header = ({ onWishlistToggle }) => {
    const { cartItems } = useSelector((state) => state.cart);
    const dispatch = useDispatch();
    const [menuOpen, setMenuOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false); // Dropdown state

    const handleOpenCart = (open) => {
        dispatch(toggleCart(open));
    };

    const cartQuantity = cartItems.length;

    const toggleMenu = () => {
        setMenuOpen(!menuOpen); // Toggle the side menu
    };

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen); // Toggle the dropdown menu
    };

    return (
        <header id="header">
            <div className="container">
                <div className="navbar">
                    <div className="menu-icon" onClick={toggleMenu}>
                        <FaBars />
                    </div>
                    <div className="nav_menu">
                        <div className="dropdown">
                            <button className="dropbtn" onClick={toggleDropdown}>
                                Dropdown <FaChevronDown />
                            </button>
                            {dropdownOpen && (
                                <div className="dropdown-content">
                                    <a href="#">Link 1</a>
                                    <a href="#">Link 2</a>
                                    <a href="#">Link 3</a>
                                </div>
                            )}
                        </div>Wishlist
                        <div title="Wishlist" className="wishlist_icon" onClick={onWishlistToggle}>
                            <FaHeart className="header-icon" />
                        </div>
                        <div title="Cart" className="cart_icon" onClick={() => handleOpenCart(true)}>
                            Cart
                            <img src="/images/bag-icon.svg" alt="bag-icon" />
                            <span className="badge">{cartQuantity}</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Side Menu and Overlay */}
            <div className={`side-menu ${menuOpen ? 'open' : ''}`}>
                <ul>
                    <li onClick={toggleMenu}><FaHome /> Home</li>
                    <li onClick={toggleMenu}><FaHeart /> Wishlist</li>
                    <li onClick={toggleMenu}><FaClipboardList /> Report</li>
                </ul>
            </div>
            <div className={`side-menu-overlay ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}></div>
        </header>
    );
};

export default Header;
