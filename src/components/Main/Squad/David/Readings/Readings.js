import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';

import './Readings.scss';
import { READINGSLIST } from '../../../../../data/readings-list';
import Aux from '../../../../../hoc/Aux/Aux';
import DavidNavigation from '../../../../Navigation/SubNavigation/DavidNavigation';

const Readings = () => {
    const listHandler = (readings) => {
        let readingsList = [];
        readings.sort((a, b) => b.orderAdded - a.orderAdded);
        
        for (const key in readings) {
            readingsList.push(
                <li key={readings[key]['id']}>
                    {/* {readings[key]['orderAdded']} */}
                    <a alt={readings[key]['title']} href={readings[key]['link']}>
                        <Image className="reading-image" src={readings[key]['imageUri']} />
                    </a>
                </li>
            );
        }
        return readingsList;
    };

    return (
        <Aux>
            <DavidNavigation />
            <Container className="readings">
                <Row>
                    <Col>
                        <p>
                            This 'complete' reading list is a reflection of what I've read, what I've listen to, what I'm in to, and what I know. Note: this list does not include the slew of books, papers, articles, and websites that I've read (and half-read) for classes, independent projects, etc. All images are attributed to their respective author and publishing company. Click an image to view it in Amazon.
                        </p>
                    </Col>
                </Row>
                <Row>
                    <ul>
                        {listHandler(READINGSLIST)}
                    </ul>
                </Row>
            </Container>
        </Aux>
    );
};

export default Readings;