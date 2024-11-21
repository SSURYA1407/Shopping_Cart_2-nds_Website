// components/RegistrationModal.js
import React, { useState } from 'react';

const RegistrationModal = ({ onClose }) => {
    const [formData, setFormData] = useState({ name: '', email: '', mobile: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData); // Process form data
        onClose(); // Close the modal after submission
    };

    return (
        <div className="modal_overlay">
            <div className="modal_content">
                <h2>Register</h2>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="tel"
                        name="mobile"
                        placeholder="Mobile Number"
                        value={formData.mobile}
                        onChange={handleChange}
                        required
                    />
                    <button type="submit">Submit</button>
                </form>
                <button onClick={onClose}>Close</button>
            </div>
        </div>
    );
};

export default RegistrationModal;
