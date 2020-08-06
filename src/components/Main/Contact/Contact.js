import React, { useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import ReCAPTCHA from 'react-google-recaptcha';

import './Contact.scss';

const Contact = () => {
    // const [name, setName] = useState('');
    // const [email, setEmail] = useState('');
    // const [message, setMessage] = useState('');
    // const [loading, setLoading] = useState(false);
    const [recaptcha, setRecaptcha] = useState(false);
    const [validated, setValidated] = useState(false);

    const messageHandler = event => {
        event.preventDefault();

        const form = event.currentTarget;

        // if (form.checkValidity() === false && !recaptcha) {
        if (form.checkValidity() === false) {
            event.stopPropagation();
        }

        setValidated(true);
        console.log('g2g');
    };

    const onChange = (value) => {
        console.log("Captcha value: ", value);
        console.log("State value: ", recaptcha);
        setRecaptcha(!recaptcha);
    };

    return (
        <Container>
            <div className="button-container">
                <h4>Contact Us</h4>
            </div>
            <Form noValidate validated={validated} onSubmit={messageHandler}>
                <Form.Group controlId="name">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Daniel Kheadies" required />
                    <Form.Control.Feedback type="invalid">
                        Please enter your name.
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group controlId="email">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="daniel.kheadies@email.com" required />
                    <Form.Control.Feedback type="invalid">
                        Please provide a valid email.
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group controlId="message">
                    <Form.Label>Message</Form.Label>
                    <Form.Control as="textarea" rows="3" placeholder="Interesting site.. How can I be a part of it?" required />
                    <Form.Control.Feedback type="invalid">
                        Please enter a message
                    </Form.Control.Feedback>
                </Form.Group>
                
                <div className="recaptcha-container">
                    <ReCAPTCHA
                        onChange={onChange}
                        sitekey="6LcDi7cZAAAAAEJFacFPaizhPJ--tYBreXGk_gYp"
                        theme="dark"
                    />
                </div>
                
                <div className="center-content">
                    <Button variant="outline-dark" type="submit">
                        Submit
                    </Button>
                </div>
            </Form>
        </Container>
    );
};

export default Contact;