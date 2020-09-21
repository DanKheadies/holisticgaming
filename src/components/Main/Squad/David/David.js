import React from 'react';
import { Col, Container, Image, Row} from 'react-bootstrap';

import './David.scss';
import Aux from '../../../../hoc/Aux/Aux';
import David2 from '../../../../assets/images/squad/david/david2.jpg';
import DavidNavigation from '../../../Navigation/SubNavigation/DavidNavigation';
import Section from '../../../Section/Section';

const David = () => (
    <Aux>
        <DavidNavigation />
        <Container className="david">
            <Row 
                className="row-spacing" 
                sm={1}
            >
                <Col md={1}></Col>
                <Col md={5}>
                    <Section header="David W Corso">
                        <p>
                            I'm 6 parts biologist, 3 parts psychologist, 1 part artist, 4 parts programmer, 5 parts educator, 7 parts researcher, 2 parts neuroscientist, and 10 parts gamer. During my sophomore year of college, I realized how games and game research could help people. My academic backgrounds in biology, psychology, biomedical engineering, and educational technology have been productive stepping stones towards that future. This portfolio is a collection of ideas and artifacts that showcase my skills, knowledge, and future plans.
                        </p>
                        <p>
                            I work a lot. I play a lot. I read a lot. And I do a lot. 
                        </p>
                    </Section>
                </Col>
                <Col className="center-content" md={5}>
                    <Image
                        alt="David"
                        fluid
                        src={David2}
                    />
                </Col>
                <Col md={1}></Col>
            </Row>
            <Row>
                <Col md={1}></Col>
                <Col>
                    <Section header="Professional Goals">
                        <ul>
                            <li>
                                I want to work with a diverse team of researchers, designers, developers, educators, and gamers.
                            </li>
                            <ul>
                                <li>
                                    I want to research, design, and develop holistic games.
                                </li>
                                <li>
                                    I want to work within each group and between groups.
                                </li>
                            </ul>
                            <li>
                                I want to research academic material, educational theories, technology tools, and business trends.
                            </li>
                            <li>
                                I want to design software, educational games, and instructional material.
                            </li>
                            <li>
                                I want to develop websites, training modules, and games.
                            </li>
                            <li>
                                I want to manage multiple projects, time, and other resources.
                            </li>
                        </ul>
                    </Section>
                </Col>
                <Col md={1}></Col>
            </Row>
        </Container>
    </Aux>
);

export default David;