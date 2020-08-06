import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import './Vitae.scss';
import Aux from '../../../../../hoc/Aux/Aux';
import DavidNavigation from '../../../../Navigation/SubNavigation/DavidNavigation';
import EmploymentRow from './EmploymentRow/EmploymentRow';
import ScrollArrow from '../../../../UI/ScrollArrow/ScrollArrow';
import Section from '../../../../Section/Section';

const Vitae = () => (
    <Aux>
        <DavidNavigation />
        <Container className="vitae">
            <Row sm={1}>
                <Col lg={1} md={0}></Col>
                <Col lg={5} md={6}>
                    <Section header="Personal Information">
                        <ul>
                            <li>David William Corso</li>
                            <li>(864) 316-6077</li>
                            <li>
                                <a href="mailto:davidwcorso@gmail.com" alt="Contact David" className="primary-link">
                                    davidwcorso@gmail.com
                                </a>
                            </li>
                            <li>April, 19 1990</li>
                            <li>Do good, die great.</li>
                        </ul>
                    </Section>
                </Col>
                <Col lg={5} md={6}>
                    <Section header="Areas of Interest">
                        <ul>
                            <li>Games</li>
                            <li>Psychology</li>
                            <li>Neuroscience</li>
                            <li>Biology</li>
                            <li>Programming</li>
                            <li>Education</li>
                            <li>Research</li>
                        </ul>
                    </Section>
                </Col>
                <Col lg={1} md={0}></Col>
            </Row>
            <Row sm={1}>
                <Col lg={1} md={0}></Col>
                <Col lg={5} md={6}>
                    <Section header="Massive Open Online Courses">
                        <Row className="header-row">
                            <Col>
                                <h6>Udemy.com</h6>
                            </Col>
                            <Col className="right-side">
                                <h6>2015 - present</h6>
                            </Col>
                        </Row>
                        <ul>
                            <li>Adobe Illustrator</li>
                            <li>Angular</li>
                            <li>Blender</li>
                            <li>C#</li>
                            <li>C++</li>
                            <li>D3.js</li>
                            <li>Expo</li>
                            <li>Node.js</li>
                            <li>PHP</li>
                            <li>Progressive Web Apps</li>
                            <li>Python</li>
                            <li>ReactJS</li>
                            <li>ReactNative</li>
                            <li>Responsive Web Design</li>
                            <li>SQL</li>
                            <li>Swift &amp; iOS</li>
                            <li>Typescript</li>
                            <li>User Experience Design</li>
                            <li>Unity</li>
                            <li>Unreal Engine</li>
                            <li>Web Development</li>
                        </ul>
                        <div className="spacer"></div>
                        <Row className="header-row">
                            <Col>
                                <h6>Codecademy.com</h6>
                            </Col>
                            <Col className="right-side">
                                <h6>2014 - 2017</h6>
                            </Col>
                        </Row>
                        <ul>
                            <li>GIT</li>
                            <li>HTML &amp; CSS</li>
                            <li>JavaScript</li>
                            <li>jQuery</li>
                            <li>PHP</li>
                            <li>SASS</li>
                        </ul>
                    </Section>
                </Col>
                <Col lg={5} md={6}>
                    <Section header="Traditional Education">
                        <Row>
                            <Col xs={8}>
                                <h6>
                                    The Graduate School at the University of South Carolina
                                </h6>
                            </Col>
                            <Col xs={4} className="right-side">
                                <h6>
                                    2013 - 2015
                                </h6>
                            </Col>
                        </Row>
                        <Row className="content-row">
                            <p>
                                Master of Education (M.Ed.) in Educational Technology, Magna Cum Laude
                            </p>
                        </Row>
                        <div className="spacer"></div>
                        <Row>
                            <Col xs={8}>
                                <h6>
                                    South Carolina Honors College - The University of South Carolina
                                </h6>
                            </Col>
                            <Col xs={4} className="right-side">
                                <h6>
                                    2008 - 2013
                                </h6>
                            </Col>
                        </Row>
                        <Row className="content-row">
                            <p>
                                Bachelor of Biological Sciences, Minor in Psychology &amp; a focus on Holistic Gaming, Cum Laude
                            </p>
                        </Row>
                        <div className="spacer"></div>
                        <Row>
                            <Col xs={8}>
                                <h6>
                                    Dorman High School
                                </h6>
                            </Col>
                            <Col xs={4} className="right-side">
                                <h6>
                                    2004 - 2008
                                </h6>
                            </Col>
                        </Row>
                        <Row className="content-row">
                            <p>
                                10th of 569
                            </p>
                        </Row>
                        <div className="spacer"></div>
                        <Row>
                            <Col xs={8}>
                                <h6>
                                    RP Dawkins Middle School
                                </h6>
                            </Col>
                            <Col xs={4} className="right-side">
                                <h6>
                                    2001 - 2004
                                </h6>
                            </Col>
                        </Row>
                        <Row className="content-row">
                            <p>
                                Top 50
                            </p>
                        </Row>
                        <div className="spacer"></div>
                        <Row>
                            <Col xs={8}>
                                <h6>
                                    St. Paul the Apostle Catholic School
                                </h6>
                            </Col>
                            <Col xs={4} className="right-side">
                                <h6>
                                    1997 - 2001
                                </h6>
                            </Col>
                        </Row>
                        <Row className="content-row">
                            <p>
                                In Jesus's good graces
                            </p>
                        </Row>
                        <div className="spacer"></div>
                        <Row>
                            <Col xs={8}>
                                <h6>
                                    St. Ann Catholic School
                                </h6>
                            </Col>
                            <Col xs={4} className="right-side">
                                <h6>
                                    1995 - 1997
                                </h6>
                            </Col>
                        </Row>
                        <Row className="content-row">
                            <p>
                                The start of Witness Protection
                            </p>
                        </Row>
                    </Section>
                </Col>
                <Col lg={1} md={0}></Col>
            </Row>
            <Row>
                <Col lg={1} md={0}></Col>
                <Col>
                    <Section header="Employment and Experience">
                        <EmploymentRow
                            company="DTFun LLC"
                            dates="April 2019 - Present"
                            location="Durham, NC"
                            role="Chief Executive Officer &amp; Owner"
                            jobs={[
                                "Creating holistic games."
                            ]}
                        />
                        <div className="spacer"></div>
                        <EmploymentRow
                            company="PortCall Inc."
                            dates="July 2015 - Present"
                            location="Durham, NC"
                            role="Chief Product Officer &amp; User Experience Designer"
                            jobs={[
                                "Designing and managing software for port operations, scheduling, resource tracking, and a number of other harbor activities.",
                                "Developing instructional materials for the company's software."
                            ]}
                        />
                        <div className="spacer"></div>
                        <EmploymentRow
                            company="Varsity Tutors"
                            dates="April 2017 - July 2018"
                            location="Durham, NC"
                            role="Tutor"
                            jobs={[
                                "Teach students new ways to understand biology and science information.",
                                "Train students to take standardized tests, like the SAT and AP tests."
                            ]}
                        />
                        <div className="spacer"></div>
                        <EmploymentRow
                            company="The Mariner Group"
                            dates="June 2013 - June 2015"
                            location="Columbia, SC"
                            role="User Experience Designer"
                            jobs={[
                                "Facilitating the interaction between humans and technology.",
                                "Designing and managing software for resource tracking and security, port and airport operations, and a number of other maritime organizations.",
                                "Developing instructional materials for the company's software."
                            ]}
                        />
                        <div className="spacer"></div>
                        <EmploymentRow
                            company="University of South Carolina"
                            dates="May 2009 - June 2015"
                            location="Columbia, SC"
                            role="Researcher"
                            jobs={[
                                "Exploring the relationship between game elements and motivation.",
                                "Received an Exploration Scholarship to review the cognitive, psychological, physical, and physiological effects inherent in video games.",
                                "Received an Exploration Scholarship to help design and develop an immunology game.",
                                "Received a Magellan Scholarship to analyze the cognitive and metacognitive effects inherent in video games."
                            ]}
                        />
                    </Section>
                </Col>
                <Col lg={1} md={0}></Col>
            </Row>
            <Row sm={1}>
                <Col lg={1} md={0}></Col>
                <Col lg={5} md={6}>
                    <Section header="Professional Skills">
                        <ul>
                            <li>Researching</li>
                            <li>Analyzing user / student needs</li>
                            <li>Documenting processes and workflows</li>
                            <li>Identifying and writing-up objectives</li>
                            <li>Applying educational methods</li>
                            <li>Creating training materials</li>
                            <li>Designing wireframes and interfaces</li>
                            <li>Developing webpages with front and back-end services</li>
                            <li>Scoping projects</li>
                            <li>Managing a variety of resources, information, and tasks</li>
                            <li>Working independently</li>
                            <li>Working with a team</li>
                            <li>Organized, resourceful, and meticulous</li>
                            <li>Cognitively and metacognitively adept</li>
                            <li>Connecting and networking</li>
                        </ul>
                    </Section>
                </Col>
                <Col lg={5} md={6}>
                    <Section header="Technical Skills">
                        <ul>
                            <li>
                                Programming
                            </li>
                            <ul>
                                <li>C++</li>
                                <li>C#</li>
                                <li>CSS</li>
                                <li>HTML</li>
                                <li>Javascript</li>
                                <li>jQuery</li>
                                <li>PHP</li>
                                <li>React</li>
                                <li>ReactNative</li>
                            </ul>
                            <li>
                                Database Management
                            </li>
                            <ul>
                                <li>Firebase</li>
                                <li>SQL</li>
                            </ul>
                            <li>
                                Programming Games
                            </li>
                            <ul>
                                <li>GameMaker</li>
                                <li>Unity</li>
                                <li>Unreal Engine</li>
                            </ul>
                            <li>
                                Wireframing &amp; Mockups
                            </li>
                            <ul>
                                <li>Adobe Fireworks</li>
                                <li>OmniGraffle</li>
                            </ul>
                            <li>
                                Graphic Design
                            </li>
                            <ul>
                                <li>Adobe Flash</li>
                                <li>Adobe Illustrator</li>
                                <li>Adobe Photoshop</li>
                                <li>GIMP</li>
                            </ul>
                            <li>
                                Modeling
                            </li>
                            <ul>
                                <li>Blender</li>
                                <li>Tinkercad</li>
                            </ul>
                            <li>
                                Multimedia Creation &amp; Manipulation
                            </li>
                            <ul>
                                <li>iMovie</li>
                                <li>Final Cut Pro</li>
                                <li>PixaTool</li>
                                <li>ScreenFlow</li>
                            </ul>
                        </ul>
                    </Section>
                </Col>
                <Col lg={1} md={0}></Col>
            </Row>
            <Row>
                <Col lg={1} md={0}></Col>
                <Col>
                    <Section header="Projects, Publications &amp; Presentations">
                        <ul>
                            <li>
                                Holistic Gaming (<a className="primary-link" href="/" alt="Holistic Gaming">https://holisticgaming.com</a>)
                            </li>
                            <li>
                                The Story of Dan Kheadies (<a className="primary-link" href="/games/tsodk" alt="The Story of Dan Kheadies">https://holisticgaming.com/games/tsodk</a>)
                            </li>
                            <li>
                                Guess Who Colluded (<a className="primary-link" href="https://guesswhocolluded.com" alt="Guess Who Colluded">https://guesswhocolluded.com</a>)
                            </li>
                            <li>
                                Explosions In My Pants &mdash; A Gentleman's Game (<a className="primary-link" href="https://explosionsinmypants.com" alt="Explosions In My Pants &mdash; A Gentleman's Game">https://explosionsinmypants.com</a>)
                            </li>
                            <li>
                                Port Operations - Scheduling and Billing (<a className="primary-link" href="http://portcall.com" alt="Port Operations - Scheduling and Billing">https://portcall.com</a>)
                            </li>
                            <li>
                                Truth or Elaborate Lie (<a className="primary-link" href="https://truthorelaboratelie.com" alt="Truth or Elaborate Lie">https://truthorelaboratelie.com</a>)
                            </li>
                            <li>
                                PixaTool Gallery (<a className="primary-link" href="/pixatool" alt="PixaTool Gallery">https://holisticgaming.com/pixatool</a>)
                            </li>
                            <li>
                                Immunis (<a className="primary-link" href="https://immunisgame.com" alt="Immunis">https://immunisgame.com</a>)
                            </li>
                            <li>
                                Senior Thesis - Holistic Gaming (<a className="primary-link" href="https://www.dropbox.com/s/ehycjvd4dhjeklq/HolisticGaming8.0.pdf?dl=0" alt="Senior Thesis - Holistic Gaming">https://www.dropbox.com/s/ehycjvd4dhjeklq/HolisticGaming8.0.pdf?dl=0</a>)
                            </li>
                            <li>
                                A Review of Video Game Effects and Uses (<a className="primary-link" href="http://sc.edu/about/offices_and_divisions/research/news_and_pubs/caravel/archive/2014/2014-caravel-video-games.php" alt="A Review of Video Game Effects and Uses">http://sc.edu/about/offices_and_divisions/research/news_and_pubs/caravel/archive/2014/2014-caravel-video-games.php</a>)
                            </li>
                            <li>
                                Learning About Learning: Cognitive Gaming as a Technology of the Self (<a className="primary-link" href="http://sc.edu/about/offices_and_divisions/research/news_and_pubs/caravel/archive/2012/2012-caravel-learning-about-learning.php" alt="Learning About Learning: Cognitive Gaming as a Technology of the Self">http://sc.edu/about/offices_and_divisions/research/news_and_pubs/caravel/archive/2012/2012-caravel-learning-about-learning.php</a>)
                            </li>
                            <li>
                                Psychological Assessment Training and Certification (www.bendergestalt.com) [RETIRED] 
                            </li>
                        </ul>
                    </Section>
                </Col>
                <Col lg={1} md={0}></Col>
            </Row>
        </Container>
        <ScrollArrow />
    </Aux>
);

export default Vitae;