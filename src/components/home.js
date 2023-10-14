import React from 'react';
import '../App.css';

const Home = () => {
    return (
        <div>
            <main id="home">
                <section className="hero-banner">
                    <h1>Welcome to Little Lemon Restaurant</h1>
                </section>
                <section id="popular" className="three-columns">
                    <article className="dish">
                        <img src="https://source.unsplash.com/300x200/?lemon,dish" alt="Lemon based dish" />
                        <h3>Dish 1</h3>
                        <p>A delightful dish made with fresh lemons and herbs.</p>
                    </article>
                    <article className="dish">
                        <img src="https://source.unsplash.com/300x200/?pasta,dish" alt="Pasta dish" />
                        <h3>Dish 2</h3>
                        <p>A tangy, zesty pasta that brings the flavors of the Mediterranean to your plate.</p>
                    </article>
                    <article className="dish">
                        <img src="https://source.unsplash.com/300x200/?dessert,dish" alt="Dessert dish" />
                        <h3>Dish 3</h3>
                        <p>A sweet and sour dessert that combines the flavors of fresh fruit and spices.</p>
                    </article>
                </section>
                <section id="specials">
                    <h2>This Week's Specials</h2>
                    <p>Explore our weekly specials and get a taste of something uniquely delicious every time you visit!</p>
                </section>
            </main>
        </div>
    );
};

export default Home;
