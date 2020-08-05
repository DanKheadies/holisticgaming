import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import './Squad.scss';
import Aux from '../../../hoc/Aux/Aux';
import David1 from '../../../assets/images/squad/david/david1.jpg';
import Section from '../../Section/Section';

const Squad = () => (
    <Aux>
        <Container>
            <Row>
                <Col md={2}></Col>
                <Col>
                    <Section header="David Corso">
                        <Row>
                            <Col lg={2}></Col>
                            <Col>
                                <Image 
                                    className="person-image"
                                    src={David1}
                                    roundedCircle
                                />
                            </Col>
                            <Col>
                                <p>
                                    I'm a jack of all trades.
                                </p>
                                <p>
                                    I work a lot.<br />
                                    I play a lot.<br />
                                    I read a lot.<br />
                                    I do a lot.<br />
                                </p>
                                <p>
                                    If you've got time, <Link to="/squad/david" className="primary-link">check out my portfolio</Link>. 
                                </p>
                            </Col>
                            <Col lg={2}></Col>
                        </Row>
                    </Section>
                </Col>
                <Col md={2}></Col>
            </Row>
        </Container>
    </Aux>
);

export default Squad;