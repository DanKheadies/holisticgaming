import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import './TSoDK.scss';
import Android from '../../../../assets/images/games/android.png';
import Aux from '../../../../hoc/Aux/Aux';
import Browser from '../../../../assets/images/games/browsers.png';
import { Event } from '../../../Tracking/Tracking';
import GameCard from '../GameCard/GameCard';
import ImageFader from '../../../UI/ImageFader/ImageFader';
import iOS from '../../../../assets/images/games/ios.png';
import Mac from '../../../../assets/images/games/mac.png';
import TSoDKImage1 from '../../../../assets/images/games/TSoDKImage1.png';
import TSoDKImage2 from '../../../../assets/images/games/TSoDKImage2.png';
import Windows from '../../../../assets/images/games/windows.png';

const TSoDK = () => {
    const downloadMacHandler = () => { 
        Event("PLAY", "TSoDK Mac Download", "TSoDK");
        window.open('/games/tsodk.4.0.mac.zip', "download"); 
    };
    const downloadWindowsHandler = () => { 
        Event("PLAY", "TSoDK Windows Download", "TSoDK");
        window.open('/games/tsodk.4.0.windows.zip', "download"); 
    };
    const goToAppStoreHandler = () => { 
        Event("PLAY", "TSoDK iOS Link", "TSoDK");
        window.open('https://apps.apple.com/us/app/the-story-of-dan-kheadies/id1449564719', "_blank"); 
    };
    const goToGooglePlayHandler = () => { 
        Event("PLAY", "TSoDK Android Link", "TSoDK");
        window.open('https://play.google.com/store/apps/details?id=com.HolisticGaming.TheStoryOfDanKheadies', "_blank"); 
    };
    const playBrowserHandler = () => { 
        Event("PLAY", "TSoDK Browser Download", "TSoDK");
        window.open('/games/uwebgl_tsodk/index.html', "_blank"); 
    };

    return (
        <Aux>
            <Container>
                <Row className="game-row">
                    <Col md={1}></Col>
                    <Col md={10}>
                        <ImageFader
                            image1={TSoDKImage1}
                            image1Alt="The Story of Dan Kheadies"
                            image2={TSoDKImage2}
                            image2Alt="Start the Story of Dan Kheadies"
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
                            version="v4.0"
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
                            version="v4.0"
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
                            version="v4.0"
                        >
                            <a alt="WineBottler" className="primary-link" href="https://winebottler.kronenberg.org/" target="_blank" rel="noopener noreferrer">Download and install WineBottler</a>.<br />
                            Download this ZIP file.<br /> 
                            Open the ZIP file.<br />
                            Run .EXE with WineBottler.<br />
                        </GameCard>
                    </Col>
                </Row>
                <Row>
                    <Col md={1}></Col>
                    <Col md={4}>
                        <GameCard
                            buttonTitle="Google Play"
                            clicked={goToGooglePlayHandler}
                            image={Android}
                            styleType="android"
                            title="Android"
                            version="v4.0"
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
                            version="v4.0"
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

export default TSoDK;