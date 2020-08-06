import React from 'react';
import { Carousel } from 'react-bootstrap';

import './ImageFader.scss';

const ImageFader = props => (
    <div className="image-container">
        <Carousel
            controls={false}
            fade={true}
            indicators={false}
            interval={props.interval}
            pause={false}
            slide={false}
            touch={false}
        >
            <Carousel.Item>
                <img
                    alt={props.image1Alt}
                    className="carousel-image"
                    src={props.image1}
                    style={props.roundedCorners ? {
                        borderRadius: '7px'
                    } : {} }
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    alt={props.image2Alt}
                    className="carousel-image"
                    src={props.image2}
                    style={props.roundedCorners ? {
                        borderRadius: '7px'
                    } : {} }
                />
            </Carousel.Item>
        </Carousel>
    </div>
);

export default ImageFader;