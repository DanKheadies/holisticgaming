import React from 'react';
import { Accordion, Col, Container, Nav, Row, Tab } from 'react-bootstrap';

import './Research.scss';
import Aux from '../../../hoc/Aux/Aux';
import QuotesBar from '../../UI/QuotesBar/QuotesBar';
import ReportAdolescentsLootBoxes from './Reports/AdolescentsLootBoxes';
import ReportAntiInflammatoryAgents from './Reports/AntiInflammatoryAgents';
import ReportBadNews from './Reports/BadNews';
import ReportDysregulatedGaming from './Reports/DysregulatedGaming';
import ReportHealthEffectsCannabis from './Reports/HealthEffectsCannabis';
import ReportPhysicalFitness from './Reports/PhysicalFitness';
import ReportPokemonEffects from './Reports/PokemonsEffect';
import ReportSweetCareGame from './Reports/SweetCareGame';
import ReportSystematicExploration from './Reports/SystematicExploration';
import ReportTraumaTetris from './Reports/TraumaTetris';
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
                                        <ReportAdolescentsLootBoxes eventKey="0" />
                                        <ReportBadNews eventKey="1" />
                                        <ReportDysregulatedGaming eventKey="2" />
                                        <ReportPokemonEffects eventKey="3" />
                                        <ReportSweetCareGame eventKey="4" />
                                        <ReportTraumaTetris eventKey="5" />
                                        <ReportVGExpertise eventKey="6" />
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
                                        <ReportAdolescentsLootBoxes eventKey="0" />
                                        <ReportAntiInflammatoryAgents eventKey="1" />
                                        <ReportBadNews eventKey="2" />
                                        <ReportDysregulatedGaming eventKey="3" />
                                        <ReportHealthEffectsCannabis eventKey="4" />
                                        <ReportPhysicalFitness eventKey="5" />
                                        <ReportPokemonEffects eventKey="6" />
                                        <ReportSweetCareGame eventKey="7" />
                                        <ReportSystematicExploration eventKey="8" />
                                        <ReportTraumaTetris eventKey="9" />
                                        <ReportVGExpertise eventKey="10" />
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