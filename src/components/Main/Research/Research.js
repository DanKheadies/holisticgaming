import React from 'react';
import { Accordion, Col, Container, Nav, Row, Tab } from 'react-bootstrap';

import './Research.scss';
import Aux from '../../../hoc/Aux/Aux';
import QuotesBar from '../../UI/QuotesBar/QuotesBar';
import ReportAntiInflammatoryAgents from './Reports/AntiInflammatoryAgents';
import ReportBadNews from './Reports/BadNews';
import ReportDysregulatedGaming from './Reports/DysregulatedGaming';
import ReportHealthEffectsCannabis from './Reports/HealthEffectsCannabis';
import ReportPhysicalFitness from './Reports/PhysicalFitness';
import ReportPokemonEffects from './Reports/PokemonsEffect';
import ReportSweetCareGame from './Reports/SweetCareGame';
import ReportVGExpertise from './Reports/VGExpertise';

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
                                        <ReportDysregulatedGaming eventKey="1" />
                                        <ReportPokemonEffects eventKey="2" />
                                        <ReportSweetCareGame eventKey="3" />
                                        <ReportVGExpertise eventKey="4" />
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
                                        <ReportDysregulatedGaming eventKey="2" />
                                        <ReportHealthEffectsCannabis eventKey="3" />
                                        <ReportPhysicalFitness eventKey="4" />
                                        <ReportPokemonEffects eventKey="5" />
                                        <ReportSweetCareGame eventKey="6" />
                                        <ReportVGExpertise eventKey="7" />
                                    </Accordion>
                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </Container>
        </Aux>
    );
};

export default Research;