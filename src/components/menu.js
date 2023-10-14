// src/components/Menu.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../App.css';

const Menu = () => {
    const [menuItems, setMenuItems] = useState([]);

    useEffect(() => {
        const fetchMenuItems = async () => {
            try {
                const response = await axios.get('127.0.0.1:8000/api/menu');
                setMenuItems(response.data);
            } catch (error) {
                console.error("Error fetching data: ", error);
            }
        };
        fetchMenuItems();
    }, []);

    return (
        <section id="menu">
            {menuItems.map(item => (
                <article key={item.id} className="dish">
                    <img src={item.image_url} alt={item.name} />
                    <h3>{item.name}</h3>
                    <p>{item.description}</p>
                </article>
            ))}
        </section>
    );
};

export default Menu;
