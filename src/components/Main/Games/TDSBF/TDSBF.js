import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import './TDSBF.scss';
import Aux from '../../../../hoc/Aux/Aux';
import Browser from '../../../../assets/images/games/browsers.png';
import GameCard from '../GameCard/GameCard';
import ImageFader from '../../../ImageFader/ImageFader';
import Mac from '../../../../assets/images/games/mac.png';
import TDSBFImage1 from '../../../../assets/images/games/TDSBFImage1.png';
import TDSBFImage2 from '../../../../assets/images/games/TDSBFImage2.png';
import Windows from '../../../../assets/images/games/windows.png';

const TDSBF = () => {
    const downloadMacHandler = () => { window.open('https://immunisgame.com', "_blank"); };
    const downloadWindowsHandler = () => { window.open('https://immunisgame.com', "_blank"); };
    const playBrowserHandler = () => { window.open('https://holisticgaming.com/games/tdsbf/index.html', "_blank"); };

    return (
        <Aux>
            <Container>
                <Row className="game-row">
                    <Col md={1}></Col>
                    <Col md={10}>
                        <ImageFader
                            image1={TDSBFImage1}
                            image1Alt="Super Best Friends"
                            image2={TDSBFImage2}
                            image2Alt="TowerDeez's Super Best Friends Tower Defense"
                            interval={3000}
                            roundedCorners
                        />
                    </Col>
                    <Col md={1}></Col>
                </Row>
                <Row>
                    <Col md={4}>
                        <GameCard
                            buttonTitle="Play"
                            clicked={playBrowserHandler}
                            image={Browser}
                            styleType="browser"
                            title="Browser"
                            version="v1.0"
                        >
                            WebGL is compatible with Firefox, Chrome, Safari and Edge. Chrome &amp; Firefox are recommended. Not compatible with mobile browsers.
                        </GameCard>
                    </Col>
                    <Col md={4}>
                        <GameCard
                            buttonTitle="Download"
                            clicked={downloadWindowsHandler}
                            image={Windows}
                            styleType="windows"
                            title="Windows"
                            version="v1.0"
                        >
                            Download this ZIP file.<br /> 
                            Open the ZIP file.<br />
                            Extract the .EXE, .DLL, and _DATA files to the same location.<br />
                            Run the .EXE and enjoy.
                        </GameCard>
                    </Col>
                    <Col md={4}>
                        <GameCard
                            buttonTitle="Download"
                            clicked={downloadMacHandler}
                            image={Mac}
                            styleType="mac"
                            title="Mac"
                            version="v1.0"
                        >
                            <a alt="WineBottler" className="primary-link" href="https://winebottler.kronenberg.org/" _blank>Download and install WineBottler</a>.<br />
                            Download this ZIP file.<br /> 
                            Open the ZIP file.<br />
                            Run .EXE with WineBottler.<br />
                        </GameCard>
                    </Col>
                </Row>
            </Container>
        </Aux>
    );
};

export default TDSBF;