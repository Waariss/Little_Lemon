import React from 'react';
import '../App.css';

const Home = () => {
    return (
        <div>
            <main id="home">
                <section className="bg-light p-5 text-center">
                    <h1 className="display-4">Welcome to Little Lemon Restaurant</h1>
                </section>
                <section id="popular" className="d-flex justify-content-around align-items-center p-4">
                    <article className="dish text-center mb-4" style={{width: '30%', margin: '15px'}}>
                        <img src="https://source.unsplash.com/300x200/?lemon,dish" alt="Lemon based dish" className="w-100" style={{maxWidth: '300px', borderRadius: '8px'}}/>
                        <h3>Dish 1</h3>
                        <p>A delightful dish made with fresh lemons and herbs.</p>
                    </article>
                    <article className="dish text-center mb-4" style={{width: '30%', margin: '15px'}}>
                        <img src="https://source.unsplash.com/300x200/?pasta,dish" alt="Pasta dish" className="w-100" style={{maxWidth: '300px', borderRadius: '8px'}}/>
                        <h3>Dish 2</h3>
                        <p>A tangy, zesty pasta that brings the flavors of the Mediterranean to your plate.</p>
                    </article>
                    <article className="dish text-center mb-4" style={{width: '30%', margin: '15px'}}>
                        <img src="https://source.unsplash.com/300x200/?dessert,dish" alt="Dessert dish" className="w-100" style={{maxWidth: '300px', borderRadius: '8px'}}/>
                        <h3>Dish 3</h3>
                        <p>A sweet and sour dessert that combines the flavors of fresh fruit and spices.</p>
                    </article>
                </section>
                <section id="specials" className="bg-light p-4 text-center">
                    <h2>This Week's Specials</h2>
                    <p>Explore our weekly specials and get a taste of something uniquely delicious every time you visit!</p>
                </section>
            </main>
        </div>
    );
};

export default Home;
