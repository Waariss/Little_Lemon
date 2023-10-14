import React, { useState } from 'react';
import axios from 'axios';
import '../App.css';

const BookingForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        date: '',
        time: '',
        number_of_people: ''
    });

    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setSuccess(false);

        // Basic form validation
        for (let key in formData) {
            if (formData[key] === '') {
                setError(`Please enter ${key.replace('_', ' ')}`);
                return;
            }
        }

        try {
            await axios.post('127.0.0.1:8000/api/bookings', formData);
            setSuccess(true);
            setFormData({
                name: '',
                date: '',
                time: '',
                number_of_people: ''
            });
        } catch (error) {
            setError('An error occurred while booking.');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="booking-form">
            {error && <p className="error">{error}</p>}
            {success && <p className="success">Booking Successful!</p>}
            <label htmlFor="name">Name:</label>
            <input 
                type="text" 
                name="name" 
                value={formData.name} 
                onChange={handleChange} 
                required 
            />
            <label htmlFor="date">Date:</label>
            <input 
                type="date" 
                name="date" 
                value={formData.date} 
                onChange={handleChange} 
                required 
            />
            <label htmlFor="time">Time:</label>
            <input 
                type="time" 
                name="time" 
                value={formData.time} 
                onChange={handleChange} 
                required 
            />
            <label htmlFor="number_of_people">Number of People:</label>
            <input 
                type="number" 
                name="number_of_people" 
                value={formData.number_of_people} 
                onChange={handleChange} 
                required 
            />
            <button type="submit">Book Table</button>
        </form>
    );
};

export default BookingForm;
