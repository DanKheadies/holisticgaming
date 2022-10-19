import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import './Corso.scss';
import Android from '../../../../assets/images/games/android.png';
import Aux from '../../../../hoc/Aux/Aux';
// import Browser from '../../../../assets/images/games/browsers.png';
import CorsoImage from '../../../../assets/images/games/CorsoImage.png';
import { Event } from '../../../Tracking/Tracking';
import GameCard from '../GameCard/GameCard';
import ImageFader from '../../../UI/ImageFader/ImageFader';
import iOS from '../../../../assets/images/games/ios.png';
// import Mac from '../../../../assets/images/games/mac.png';
// import Windows from '../../../../assets/images/games/windows.png';

const Corso = () => {
    // const downloadMacHandler = () => { 
    //     Event("PLAY", "TDSBF Mac Download", "TDSBF");
    //     window.open('/games/tdsbf.1.0.mac.zip', "download"); 
    // };
    // const downloadWindowsHandler = () => { 
    //     Event("PLAY", "TDSBF Windows Download", "TDSBF");
    //     window.open('/games/tdsbf.1.0.windows.zip', "download"); 
    // };
    const goToAppStoreHandler = () => { 
        Event("PLAY", "Corso Games iOS Link", "Corso");
        window.open('https://apps.apple.com/us/app/corso-games/id1617108711', "_blank"); 
    };
    const goToGooglePlayHandler = () => { 
        Event("PLAY", "Corso Games Android Link", "Corso");
        window.open('https://play.google.com/apps/test/com.dtfun.corso_games_app/11', "_blank"); 
    };
    // const playBrowserHandler = () => { 
    //     Event("PLAY", "TDSBF Browser Download", "TDSBF");
    //     window.open('/games/uwebgl_tdsbf/index.html', "_blank"); 
    // };

    return (
        <Aux>
            <Container>
                <Row className="game-row">
                    <Col md={1}></Col>
                    <Col md={10}>
                        <ImageFader
                            image1={CorsoImage}
                            image1Alt="Corso Games"
                            image2={CorsoImage}
                            image2Alt="Corso Games"
                            interval={3000}
                            roundedCorners
                        />
                    </Col>
                    <Col md={1}></Col>
                </Row>
                {/* <Row>
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
                            <a alt="WineBottler" className="primary-link" href="https://winebottler.kronenberg.org/"  target="_blank" rel="noopener noreferrer">Download and install WineBottler</a>.<br />
                            Download this ZIP file.<br /> 
                            Open the ZIP file.<br />
                            Run .EXE with WineBottler.<br />
                        </GameCard>
                    </Col>
                </Row> */}
                <Row>
                    <Col md={1}></Col>
                    <Col md={4}>
                        <GameCard
                            buttonTitle="Google Play"
                            clicked={goToGooglePlayHandler}
                            image={Android}
                            styleType="android"
                            title="Android"
                            version="v1.1.1"
                        >
                            Download from Google Play for a mobile device.
                        </GameCard>
                    </Col>
                    <Col md={2}></Col>
                    <Col md={4}>
                        <GameCard
                            buttonTitle="App Store"
                            clicked={goToAppStoreHandler}
                            image={iOS}
                            styleType="ios"
                            title="iOS"
                            version="v1.1.1"
                        >
                            Download from the App Store for a mobile device.
                        </GameCard>
                    </Col>
                    <Col md={1}></Col>
                </Row>
            </Container>
        </Aux>
    );
};

export default Corso;