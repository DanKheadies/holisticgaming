import React from 'react';
import { Accordion, Col, Container, Nav, Row, Tab } from 'react-bootstrap';

import './Research.scss';
import Aux from '../../../hoc/Aux/Aux';
import QuotesBar from '../../UI/QuotesBar/QuotesBar';
import ReportAntiInflammatoryAgents from './Reports/AntiInflammatoryAgents';
import ReportBadNews from './Reports/BadNews';
import ReportHealthEffectsCannabis from './Reports/HealthEffectsCannabis';
import ReportPhysicalFitness from './Reports/PhysicalFitness';
import ReportPokemonEffects from './Reports/PokemonsEffect';
import ReportVGExpertise from './Reports/VGExpertise';
import ScrollArrow from '../../UI/ScrollArrow/ScrollArrow';

const Research = () => {
    return (
        <Aux>
            <QuotesBar />
            <Container className="research-container">
                <Tab.Container id="left-tabs-example" defaultActiveKey="gaming">
                    <Row>
                        <Col md={3}>
                            <Nav variant="pills" className="flex-column">
                                <Nav.Item>
                                    <Nav.Link eventKey="gaming">
                                        Gaming
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="dankheadies">
                                        Dan Kheadies
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="immunis">
                                        Immunis
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="all">
                                        All
                                    </Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Col>
                        <Col md={9}>
                            <Tab.Content>
                                <Tab.Pane eventKey="gaming">
                                    <Accordion>
                                        <ReportBadNews eventKey="0" />
                                        <ReportPokemonEffects eventKey="1" />
                                        <ReportVGExpertise eventKey="2" />
                                    </Accordion>
                                </Tab.Pane>
                                <Tab.Pane eventKey="dankheadies">
                                    <Accordion>
                                        <ReportHealthEffectsCannabis eventKey="0" />
                                    </Accordion>
                                </Tab.Pane>
                                <Tab.Pane eventKey="immunis">
                                    <Accordion>
                                        <ReportAntiInflammatoryAgents eventKey="0" />
                                    </Accordion>
                                </Tab.Pane>
                                <Tab.Pane eventKey="all">
                                    <Accordion>
                                        <ReportAntiInflammatoryAgents eventKey="0" />
                                        <ReportBadNews eventKey="1" />
                                        <ReportHealthEffectsCannabis eventKey="2" />
                                        <ReportPhysicalFitness eventKey="3" />
                                        <ReportPokemonEffects eventKey="4" />
                                        <ReportVGExpertise eventKey="5" />
                                    </Accordion>
                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </Container>
            <ScrollArrow />
        </Aux>
    );
};

export default Research;