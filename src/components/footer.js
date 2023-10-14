import React from 'react';
import { Container, Row, Col, CardFooter } from 'react-bootstrap';
import '../App.css';

const AppFooter = () => {
    return (
        <div className="mt-auto"> {/* Ensures footer sticks to the bottom */}
            <Container fluid className="bg-light py-5">
                <Container>
                    <Row>
                        <Col md={6}>
                            <h2>Contact Us</h2>
                            <p>Visit us: 123 Lemon Street, Citrus City, 45678</p>
                            <p>Call us: (123) 456-7890</p>
                            <p>Email us: info@littlelemon.com</p>
                        </Col>
                        <Col md={6}>
                            {/* You might want to add additional columns for other information or social media links */}
                        </Col>
                    </Row>
                </Container>
            </Container>
            <CardFooter className="bg-dark text-white text-center py-3">
                <p>&copy; 2023 Little Lemon. All rights reserved.</p>
            </CardFooter>
        </div>
    );
};

export default AppFooter;
