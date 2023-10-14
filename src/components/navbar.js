import React from 'react';
import '../App.css';

const Navbar = () => {
    return (
        <nav aria-label="Main Navigation">
            <ul>
                <li><a href="#home" class="active">Home</a></li>
                <li><a href="#popular">Popular Dishes</a></li>
                <li><a href="#specials">Specials</a></li>
                <li><a href="#contact">Contact Us</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;
