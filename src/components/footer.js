import React from 'react';
import '../App.css';

const Footer = () => {
    return (
        <div>
            <section id="contact">
                    <h2>Contact Us</h2>
                    <p>Visit us: 123 Lemon Street, Citrus City, 45678</p>
                    <p>Call us: (123) 456-7890</p>
                    <p>Email us: info@littlelemon.com</p>
                </section>
            <footer>
                <div className="footer-text">
                    <p>&copy; 2023 Little Lemon. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
