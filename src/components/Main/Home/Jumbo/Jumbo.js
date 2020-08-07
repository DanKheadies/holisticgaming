import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';

import './Jumbo.scss';
import JumboImages from './JumboImages';

const Jumbo = props => {
    const [jumboImage, setJumboImage] = useState();

    // executed right after every component render cycle
    // after component rendered the first time, this runs
    useEffect(() => {
        const rando = Math.floor(Math.random() * JumboImages.length);
        const image = JumboImages[rando];
        setJumboImage(image);
    }, [setJumboImage]); //controls how often this runs

    return (
        <div className="jumbotron-container">
            <div className="jumbotron-image"
                style={{
                    backgroundImage: `url(${jumboImage})`
                }}
            ></div>
            <div className="jumbotron-text">
                <h1>You're smarter than you think.</h1>
                <Button 
                    onClick={props.showModalHandler}
                    size="lg"
                    variant="outline-light"
                >
                    So keep playing.
                </Button>
            </div>
        </div>
    );
};

export default Jumbo;