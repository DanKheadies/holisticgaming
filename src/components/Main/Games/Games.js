import React from 'react';
import { Carousel, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import './Games.scss';
import Aux from '../../../hoc/Aux/Aux';

import GuessWhoImage from '../../../assets/images/games/gwc.png';
import ImmunisImage from '../../../assets/images/games/immunis.png';
import TD_SBF_Image from '../../../assets/images/games/td_sbf_td.png';
import ToELImage from '../../../assets/images/games/toel.png';
import tSoDKImage from '../../../assets/images/games/tsodk.png';

const Games = () => {
    return (
        <Aux>
            <Container id="games">
                <Carousel
                    fade={true}
                    interval={null}
                >
                    <Carousel.Item>
                        <img
                            src={tSoDKImage}
                            alt="The Story of Dan Kheadies"
                        />
                        <Carousel.Caption>
                            <h3>The Story of Dan Kheadies</h3>
                            <div className="games-spacer"></div>
                            <p>
                                Join Dan as he starts the adventure of his life.
                            </p>
                            <p>
                                <Link to="/games/tsodk" className="primary-link">Play the ever unfolding story</Link> that is Dan's life.
                            </p>
                            <p>
                                <Link to="/contact" className="primary-link">Have issues?</Link>
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            src={ToELImage}
                            alt="Truth or Elaborate Lie"
                        />
                        <Carousel.Caption>
                            <h3>Truth or Elaborate Lie</h3>
                            <div className="games-spacer"></div>
                            <p>
                                Become smarter and more adept at seeing and knowing the Truth versus Elaboarte Lies. 
                            </p>
                            <p>
                                After all, <a href="https://truthorelaboratelie.com" alt="Truth or Elaborate Lie" className="primary-link">only you can tell the difference</a>.
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            src={TD_SBF_Image}
                            alt="TowerDeez's Super Best Friends Tower Defense"
                        />
                        <Carousel.Caption>
                            <h3>TowerDeez's Super Best Friends Tower Defense</h3>
                            <div className="games-spacer"></div>
                            <p>
                                When the world falls into darkness, you need a friend or two to help you see the light.
                            </p>
                            <p>
                                <Link to="/games/tdsbf" className="primary-link">Join the Super Best Friends</Link> and save the world from the forces of evil.
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            src={ImmunisImage}
                            alt="Immunis"
                        />
                        <Carousel.Caption>
                            <h3>Immunis</h3>
                            <div className="games-spacer"></div>
                            <p>
                                A game about how your body fights infections, diseases, and other bodily invaders. 
                                <br /><br />
                                It's time for you to <a href="https://immunisgame.com" alt="Immunis" className="primary-link">join the fight</a>.
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            src={GuessWhoImage}
                            alt="Guess Who Colluded"
                        />
                        <Carousel.Caption>
                            <h3>Guess Who Colluded</h3>
                            <div className="games-spacer"></div>
                            <p>
                                It's less of a matter of IF and more of a matter of WHO.
                            </p>
                            <p>
                                <a href="https://guesswhocolluded.com" alt="Guess Who Colluded" className="primary-link">Guess Who Colluded</a> while you still can...
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </Container>
            {/* <Container>
                <Row>
                    <div className="section-header">Immunis</div>
                    <Row>
                        <Col sm={4}>
                            <Image src={ImmunisImage} alt="Immunis" fluid />
                        </Col>
                        <Col sm={8}>
                            <div className="section-content">
                                A game about how your body fights infections, diseases, and other bodily invaders.

                                It's time for you to <a href="http://www.immunisgame.com/" alt="Immunis">join the fight</a>.
                            </div>
                        </Col>
                    </Row>
                </Row>
            </Container> */}
        </Aux>
    );
};

export default Games;