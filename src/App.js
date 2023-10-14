// src/App.js
import React from 'react';
import Navbar from './components/navbar';
import Menu from './components/menu';
import BookingForm from './components/bookingform';
import Home from './components/home';
import Footer from './components/footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Menu />
      <BookingForm />
      <Footer />
    </div>
  );
}

export default App;
