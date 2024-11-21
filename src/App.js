// App.js
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Home from './pages/Home';
import Footer from './components/Footer';
import Cart from './components/Cart';
import RegistrationModal from './components/RegistrationModal';
import { Provider } from 'react-redux';
import store from './store/store';


const App = () => {
    const [showRegistration, setShowRegistration] = useState(false);
    const [showWishlist, setShowWishlist] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowRegistration(true);
        }, 8000);

        return () => clearTimeout(timer);
    }, []);

    const closeModal = () => setShowRegistration(false);

    const toggleWishlistModal = () => setShowWishlist(!showWishlist);

    return (
        <Provider store={store}>
            <Header onWishlistToggle={toggleWishlistModal} />
            <Home showWishlist={showWishlist} toggleWishlistModal={toggleWishlistModal} />
            <Footer />
            <Cart />
            {showRegistration && <RegistrationModal onClose={closeModal} />}
        </Provider>
    );
};

export default App;
