import React, { useState } from 'react';
import axios from 'axios';
import { Form, Button, Alert, Container } from 'react-bootstrap';
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
            await axios.post('http://127.0.0.1:8000/api/bookings', formData);
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
        <Container className="mt-5">
            <Form onSubmit={handleSubmit} className="booking-form">
                {error && <Alert variant="danger">{error}</Alert>}
                {success && <Alert variant="success">Booking Successful!</Alert>}
                <Form.Group controlId="name">
                    <Form.Label>Name:</Form.Label>
                    <Form.Control 
                        type="text" 
                        name="name" 
                        value={formData.name} 
                        onChange={handleChange} 
                        required 
                    />
                </Form.Group>
                <Form.Group controlId="date">
                    <Form.Label>Date:</Form.Label>
                    <Form.Control 
                        type="date" 
                        name="date" 
                        value={formData.date} 
                        onChange={handleChange} 
                        required 
                    />
                </Form.Group>
                <Form.Group controlId="time">
                    <Form.Label>Time:</Form.Label>
                    <Form.Control 
                        type="time" 
                        name="time" 
                        value={formData.time} 
                        onChange={handleChange} 
                        required 
                    />
                </Form.Group>
                <Form.Group controlId="number_of_people">
                    <Form.Label>Number of People:</Form.Label>
                    <Form.Control 
                        type="number" 
                        name="number_of_people" 
                        value={formData.number_of_people} 
                        onChange={handleChange} 
                        required 
                    />
                </Form.Group>
                <Button variant="primary" type="submit">Book Table</Button>
            </Form>
        </Container>
    );
};

export default BookingForm;
