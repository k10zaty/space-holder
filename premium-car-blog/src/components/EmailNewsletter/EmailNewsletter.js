import React, { useState } from 'react';
import './EmailNewsletter.css';
import CustomModal from '../Modal/Modal';

const EmailNewsletter = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name && email) {
            setIsModalOpen(true);
            setName('');
            setEmail('');
        }
    };

    return (
        <section className="email-newsletter">
            <h2 className="email-newsletter__title">Email newsletter</h2>
            <p className="email-newsletter__description">Sign up to receive email updates and to hear what's going on.</p>
            <form className="email-newsletter__form" onSubmit={handleSubmit}>
                <input
                    type="text"
                    className="email-newsletter__input"
                    placeholder="Your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    type="email"
                    className="email-newsletter__input"
                    placeholder="Your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <button type="submit" className="email-newsletter__button">Subscribe to newsletter</button>
            </form>

            <CustomModal isOpen={isModalOpen} onRequestClose={() => setIsModalOpen(false)}>
                <h2>Thank You!</h2>
                <p>You have successfully subscribed to our newsletter.</p>
                <button onClick={() => setIsModalOpen(false)}>Close</button>
            </CustomModal>
        </section>
    );
};

export default EmailNewsletter;