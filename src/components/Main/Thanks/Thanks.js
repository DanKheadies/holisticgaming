import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';

import './Thanks.scss';
import Aux from '../../../hoc/Aux/Aux';
import ThanksImage from '../../../assets/images/thanks/thanks.png';

const Thanks = () => (
    <Aux>
        <Container className="center-content">
            <Row>
                <Col>
                    <p>
                        Thanks for your love &amp; support!
                    </p>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Image 
                        src={ThanksImage}
                    />
                </Col>
            </Row>
        </Container>
    </Aux>
);

export default Thanks;