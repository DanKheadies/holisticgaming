import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';

import './Thanks.scss';
import Aux from '../../../hoc/Aux/Aux';
import ThanksImage1 from '../../../assets/images/thanks/thanks-kinda-1.png';
import ThanksImage2 from '../../../assets/images/thanks/thanks-kinda-2.png';
import ThanksImage3 from '../../../assets/images/thanks/thanks-kinda-3.png';

const ThanksKinda = () => (
    <Aux>
        <Container className="center-content">
            <Row>
                <Col>
                    <p>
                        Thanks for your thoughts &amp; prayers!
                    </p>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Image 
                        src={ThanksImage1}
                    />
                    <Image 
                        src={ThanksImage2}
                    />
                    <Image 
                        src={ThanksImage3}
                    />
                </Col>
            </Row>
        </Container>
    </Aux>
);

export default ThanksKinda;