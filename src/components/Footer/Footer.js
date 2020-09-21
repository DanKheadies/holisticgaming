import React, { useEffect, useState } from 'react';
import { Col, Container, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';

import './Footer.scss';
import Aux from '../../hoc/Aux/Aux';

const Footer = () => {
    const [currentLocation, setCurrentLocation] = useState('');
    const [prevLocation, setPrevLocation] = useState('');
    const [showFooter, setShowFooter] = useState(false);

    const location = useLocation();

    const checkForBottom = () => {
        // Need +2
        if ((window.innerHeight + window.scrollY) + 2 >= document.body.offsetHeight) {
            setShowFooter(true);
        }
        else {
            setShowFooter(false);
        }
    };

    const delayCheckForBottom = () => {
        if (currentLocation !== prevLocation) {
            setPrevLocation(currentLocation);
            setTimeout(() => {
                checkForBottom();
            }, 300);
        }
    };

    const renderTooltip = (props) => (
        <Tooltip id="cc-tooltip" {...props}>
            Except where noted, all content on this site is licensed under a <a href="https://creativecommons.org/licenses/" alt="CC Attribution" className="footer-link">CC Attribution 4.0 International License</a>: 
            <ul>
                <li>
                    ShareAlike
                </li>
                <li>
                    NonCommerical
                </li>
                <li>
                    Attribution&mdash;<Link to="/contact" className="footer-link">DTFun LLC</Link>
                </li>
            </ul>
        </Tooltip>
    );

    useEffect(() => {
        checkForBottom();
        setCurrentLocation(location.pathname);
    }, [location]);

    window.addEventListener('scroll', checkForBottom);
    // window.addEventListener('mouseup', delayCheckForBottom);
    window.addEventListener('pointerup', delayCheckForBottom);

    return (
        <Aux>
            <Container 
                className="footer-container"
                style={{
                    display: showFooter ? 'block' : 'none'
                }}
            >
                <div className="custom-row">
                    <Col>
                        <OverlayTrigger
                            placement="top"
                            delay={{ show: 150, hide: 600 }}
                            overlay={renderTooltip}
                        >
                            <a href="https://creativecommons.org/licenses/" alt="CC Attribution" className="footer-link">CC SA NC BY</a>
                        </OverlayTrigger> &nbsp;
                        <Link to="/contact" className="footer-link">DTFun LLC</Link>
                    </Col>
                    <Col className="footer-right">
                        Powered by love and <a href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=P8HU4RD3W2XQY&source=url" alt="Support HG" className="footer-link">support</a>.
                    </Col>
                </div>
            </Container>
        </Aux>
    );
};

export default Footer;