import React, { useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { GoogleReCaptchaProvider, useGoogleReCaptcha } from 'react-google-recaptcha-v3';

import './Contact.scss';
import ENV from '../../../env';

const Contact = () => {
    const { executeRecaptcha } = useGoogleReCaptcha();
    const [token, setToken] = useState('');

    // const [name, setName] = useState('');
    // const [email, setEmail] = useState('');
    // const [message, setMessage] = useState('');
    
    const [validated, setValidated] = useState(false);

    const messageHandler = event => {
        event.preventDefault();

        const form = event.currentTarget;

        if (form.checkValidity() === false) {
            console.log('something not filled in');
            event.stopPropagation();
        }
        else {
            console.log('g2g');
            clickHandler();
        }

        setValidated(true);
    };

    const clickHandler = async () => {
        if (!executeRecaptcha) {
            console.log('failed');
            return;
        }
    
        const result = await executeRecaptcha("contact");
    
        setToken(result);
    };

    return (
        <GoogleReCaptchaProvider
            reCaptchaKey={ENV.recaptcha}
        >
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
                    
                    <div className="center-content">
                        <Button variant="outline-dark" type="submit">
                            Submit
                        </Button>
                    </div>
                    {token && <p>Token: {token}</p>}
                </Form>
            </Container>
        </GoogleReCaptchaProvider>
    );
};

export default Contact;