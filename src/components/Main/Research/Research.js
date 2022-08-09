import React from 'react';
import { Accordion, Col, Container, Nav, Row, Tab } from 'react-bootstrap';

import './Research.scss';
import Aux from '../../../hoc/Aux/Aux';
import QuotesBar from '../../UI/QuotesBar/QuotesBar';
import ReportAdolescentsLootBoxes from './Reports/AdolescentsLootBoxes';
import ReportAI4Depression from './Reports/AI4Depression';
import ReportAntiInflammatoryAgents from './Reports/AntiInflammatoryAgents';
import ReportBadNews from './Reports/BadNews';
import ReportDysregulatedGaming from './Reports/DysregulatedGaming';
import ReportHealthEffectsCannabis from './Reports/HealthEffectsCannabis';
import ReportPhysicalFitness from './Reports/PhysicalFitness';
import ReportPokemonEffects from './Reports/PokemonsEffect';
import ReportPokemonGoPhysical from './Reports/PokemonGoPhysical';
import ReportSweetCareGame from './Reports/SweetCareGame';
import ReportSystematicExploration from './Reports/SystematicExploration';
import ReportTraumaTetris from './Reports/TraumaTetris';
import ReportVGExpertise from './Reports/VGExpertise';

const Research = () => {
    return (
        <Aux>
            <QuotesBar />
            <Container className="research-container">
                <Tab.Container id="left-tabs-example" defaultActiveKey="all">
                    <Row>
                        <Col md={3}>
                            <Nav variant="pills" className="flex-column">
                                <Nav.Item>
                                    <Nav.Link eventKey="all">
                                        All
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="dankheadies">
                                        Dan Kheadies
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="gaming">
                                        Gaming
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="immunis">
                                        Immunis
                                    </Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Col>
                        <Col md={9}>
                            <Tab.Content>
                            <Tab.Pane eventKey="all">
                                    <Accordion>
                                        <ReportAdolescentsLootBoxes eventKey="0" />
                                        <ReportAI4Depression eventKey="1" />
                                        <ReportAntiInflammatoryAgents eventKey="2" />
                                        <ReportBadNews eventKey="3" />
                                        <ReportDysregulatedGaming eventKey="4" />
                                        <ReportHealthEffectsCannabis eventKey="5" />
                                        <ReportPhysicalFitness eventKey="6" />
                                        <ReportPokemonEffects eventKey="7" />
                                        <ReportPokemonGoPhysical eventKey="8" />
                                        <ReportSweetCareGame eventKey="9" />
                                        <ReportSystematicExploration eventKey="10" />
                                        <ReportTraumaTetris eventKey="11" />
                                        <ReportVGExpertise eventKey="12" />
                                    </Accordion>
                                </Tab.Pane>
                                <Tab.Pane eventKey="dankheadies">
                                    <Accordion>
                                        <ReportHealthEffectsCannabis eventKey="0" />
                                    </Accordion>
                                </Tab.Pane>
                                <Tab.Pane eventKey="gaming">
                                    <Accordion>
                                        <ReportAdolescentsLootBoxes eventKey="0" />
                                        <ReportBadNews eventKey="1" />
                                        <ReportDysregulatedGaming eventKey="2" />
                                        <ReportPokemonEffects eventKey="3" />
                                        <ReportPokemonGoPhysical eventKey="4" />
                                        <ReportSweetCareGame eventKey="5" />
                                        <ReportTraumaTetris eventKey="6" />
                                        <ReportVGExpertise eventKey="7" />
                                    </Accordion>
                                </Tab.Pane>
                                <Tab.Pane eventKey="immunis">
                                    <Accordion>
                                        <ReportAntiInflammatoryAgents eventKey="0" />
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