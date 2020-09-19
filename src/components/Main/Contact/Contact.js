import React, { useCallback, useEffect, useState } from 'react';
import { Button, Col, Container, Form, Row, Spinner } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { loadReCaptcha } from 'react-recaptcha-v3';
import classNames from 'classnames';

import './Contact.scss';
import { checkValidity } from '../../../shared/utility';
import { RECAPTCHA } from '../../../env';
import * as contactActions from '../../../store/actions/contact';

const Contact = () => {
    const [email, setEmail] = useState('');
    const [emailSucceeded, setEmailSucceeded] = useState(false);
    const [error, setError] = useState(false);
    const [hasRecaptcha, setHasRecaptcha] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [name, setName] = useState('');
    const [reason, setReason] = useState('');
    const [validated, setValidated] = useState(false);

    const dispatch = useDispatch();

    const updateInputHandler = (event, inputType) => {
        if (inputType === "email") { setEmail(event.target.value); }
        if (inputType === "name") { setName(event.target.value); }
        if (inputType === "reason") { setReason(event.target.value); }

        if (validated) { setValidated(false); }
    };

    const submitHandler = useCallback(async (event) => {
        event.preventDefault();
        
        setError(null);
        setIsLoading(true);
        
        let submission = await dispatch(contactActions.sendContactEmail(
            {
                message: reason, 
                name: name, 
                email: email
            }
        ));
        
        if (submission.succeeded) {
            setEmailSucceeded(true);
        }
        else {
            setError(true);
        }

        setIsLoading(false);
    }, [dispatch, email, name, reason]);

    const resetContactHandler = () => {
        setEmail('');
        setEmailSucceeded(false);
        setError(false);
        setName('');
        setReason('');
        setValidated(false);
    };

    useEffect(() => {
        if (hasRecaptcha) {
            setIsLoading(false);
        }
        loadReCaptcha(RECAPTCHA, (() => {
            setHasRecaptcha(true);
            setIsLoading(false);
        }));
    }, [hasRecaptcha]);

    if (isLoading) {
        return (
            <div className={classNames("center-content", "maximum-area")}>
                <Spinner 
                    animation="border" 
                    className="custom-spinner"
                    role="status"
                    variant="primary" 
                >
                    <span className="sr-only">Loading...</span>
                </Spinner>
            </div>
        );
    }

    return (
        <div className="contact">
            <Container>
                <Row className="center-content">
                    <Col>
                        <div>
                            <h3>Contact Us</h3>
                        </div>
                        <div className="contact-header">
                            {
                                !emailSucceeded && !error ? 
                                    <h6>Having a problem or question? Reach out to us and we'll get in touch with you as soon as possible.</h6>
                                : error ?
                                    <h6>There was a problem with your submission. Please try again.</h6>
                                :
                                    <h6>Thank you for reaching out!</h6>
                            }
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col md={2}></Col>
                    <Col md={8}>
            {!isLoading && error ?
                <div className={"center-content"}>
                    <div>
                        <h4>
                            If the problem persists, reach out to us at <a className="primary-link" href="mailto:support@holisticgaming.com" alt="support@holisticgaming.com">support@holisticgaming.com</a>.</h4>
                    </div>
                    <br />
                    <Button 
                        className="custom-button"
                        onClick={resetContactHandler}
                        variant="outline-primary"
                    >
                        Try Again
                    </Button>
                </div>
            : emailSucceeded ? 
                <div></div> 
            :
            <Form onSubmit={submitHandler}>
                <Form.Row>
                    <Form.Group as={Col} controlId="contactFormName">
                        <Form.Label>Your Name</Form.Label>
                        <Form.Control 
                            onChange={(e) => updateInputHandler(e, "name")}
                            placeholder="First &amp; Last" 
                            required
                            value={name}
                        />
                    </Form.Group>

                    <Form.Group as={Col} controlId="contactFormEmail">
                        <Form.Label>Your Email</Form.Label>
                        <Form.Control 
                            isValid={validated && checkValidity(email, { isEmail: true }) ? true : false}
                            isInvalid={validated && !checkValidity(email, { isEmail: true }) ? true : false}
                            onChange={(e) => updateInputHandler(e, "email")}
                            placeholder="name@example.com" 
                            required
                            type="email" 
                            value={email}
                        />
                    </Form.Group>
                </Form.Row>

                <Form.Group controlId="contactFormContent">
                    <Form.Label>Your Reason for Contacting Us</Form.Label>
                    <Form.Control 
                        as="textarea" 
                        onChange={(e) => updateInputHandler(e, "reason")}
                        placeholder="I was wondering..." 
                        required
                        rows="3" 
                        value={reason}
                    />
                </Form.Group>
                
                <div className="center-content">
                    <Button 
                        className={classNames("custom-button", "form-button")} 
                        type="submit"
                        variant="outline-primary" 
                    >
                        Submit
                    </Button>
                </div>
            </Form>
            }
                    </Col>
                    <Col md={2}></Col>
                </Row>
            </Container>
        </div>
    );
};

export default Contact;