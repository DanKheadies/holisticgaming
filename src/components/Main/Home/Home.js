import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import './Home.scss';
import Aux from '../../../hoc/Aux/Aux';
import CustomModal from '../../UI/CustomModal/CustomModal';
import HGConn from '../../../assets/images/HGConn.png';
import HGConnGames from '../../../assets/images/HGConnGames.png';
import ImageFader from '../../UI/ImageFader/ImageFader';
import Jumbo from './Jumbo/Jumbo';
import ModalMessage from './ModalMessage/ModalMessage';
import Section from '../../Section/Section';

const Home = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <Aux>
            <Container>
                <Jumbo showModalHandler={handleShow} />
                <Row xs={1} md={2}>
                    <Col className="home-section">
                        <Section header="What?" spacer>
                            Games affect people physically, mentally, emotionally, socially, and academically. Holistic gaming recognizes these effects, and it helps people research, design, and develop awesome games.
                        </Section>
                        <Section header="Why?" spacer>
                            Games make life better. They are valuable to many people for many reasons. Holistic gaming explains why they are valuable, how they work, and what people can do with games to make their lives better.
                        </Section>
                        <Section header="Who?">
                            Everyone should adopt a holistic approach while researching and creating games&mdash;and for life. Like most things, the more you know and do, the better you'll be at it. We are the best holistic gamers.
                        </Section>
                    </Col>
                    <Col>
                        <ImageFader
                            image1={HGConn}
                            image1Alt="HolisticGaming Connection"
                            image2={HGConnGames}
                            image2Alt="HolisticGaming Connection w/ Games"
                            interval={5000}
                        />
                    </Col>
                </Row>
            </Container>
            <CustomModal show={show} closeModal={handleClose}>
                <ModalMessage dismissModal={handleClose} />
            </CustomModal>
        </Aux>
    );
};

export default Home;