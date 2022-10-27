import React from 'react';
import { Accordion, Col, Container, Nav, Row, Tab } from 'react-bootstrap';

import './Research.scss';
import Aux from '../../../hoc/Aux/Aux';
import QuotesBar from '../../UI/QuotesBar/QuotesBar';
import ReportAdolescentsLootBoxes from './Reports/AdolescentsLootBoxes';
import ReportAI4Depression from './Reports/AI4Depression';
import ReportAntiInflammatoryAgents from './Reports/AntiInflammatoryAgents';
import ReportAssociationVGsCog from './Reports/AssociationVGsCog';
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

const Research = props => {
    var queryString = props.location.search;
    
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
                                        <ReportAdolescentsLootBoxes 
                                            eventKey="0" param={queryString} />
                                        <ReportAI4Depression 
                                            eventKey="1" param={queryString} />
                                        <ReportAntiInflammatoryAgents 
                                            eventKey="2" param={queryString} />
                                        <ReportAssociationVGsCog 
                                            eventKey="3" param={queryString} />
                                        <ReportBadNews 
                                            eventKey="4" param={queryString} />
                                        <ReportDysregulatedGaming 
                                            eventKey="5" param={queryString} />
                                        <ReportHealthEffectsCannabis 
                                            eventKey="6" param={queryString} />
                                        <ReportPhysicalFitness 
                                            eventKey="7" param={queryString} />
                                        <ReportPokemonEffects 
                                            eventKey="8" param={queryString} />
                                        <ReportPokemonGoPhysical 
                                            eventKey="9" param={queryString} />
                                        <ReportSweetCareGame 
                                            eventKey="10" param={queryString} />
                                        <ReportSystematicExploration 
                                            eventKey="11" param={queryString} />
                                        <ReportTraumaTetris 
                                            eventKey="12" param={queryString} />
                                        <ReportVGExpertise 
                                            eventKey="13" param={queryString} />
                                    </Accordion>
                                </Tab.Pane>
                                <Tab.Pane eventKey="dankheadies">
                                    <Accordion>
                                        <ReportHealthEffectsCannabis
                                            eventKey="0" />
                                    </Accordion>
                                </Tab.Pane>
                                <Tab.Pane eventKey="gaming">
                                    <Accordion>
                                        <ReportAdolescentsLootBoxes 
                                            eventKey="0" />
                                        <ReportAssociationVGsCog 
                                            eventKey="1" />
                                        <ReportBadNews 
                                            eventKey="2" />
                                        <ReportDysregulatedGaming 
                                            eventKey="3" />
                                        <ReportPokemonEffects 
                                            eventKey="4" />
                                        <ReportPokemonGoPhysical 
                                            eventKey="5" />
                                        <ReportSweetCareGame 
                                            eventKey="6" />
                                        <ReportTraumaTetris 
                                            eventKey="7" />
                                        <ReportVGExpertise 
                                            eventKey="8" />
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