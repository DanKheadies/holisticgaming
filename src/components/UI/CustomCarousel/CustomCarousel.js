import React from 'react';
import { Carousel } from 'react-bootstrap';
import classNames from 'classnames';

import './CustomCarousel.scss';

const CustomCarousel = props => {
    const carouselItemsHandler = carouselItems => {

        // items={{
        //     "Tsar Wars": {
        //         imageSrc: PicTsarWars,
        //         caption: "Alleman's Jedi Templar Knight",
        //         link: "https://www.deviantart.com/alleman/art/Jedi-Templar-Knight-161108356"
        //     }
        // }}
        let itemArray = [];
        for (const key in carouselItems) {
            itemArray.push(
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={carouselItems[key]['image']}
                        alt={carouselItems[key]}
                    />
                    <Carousel.Caption>
                        <h5 className="carousel-header">
                            {carouselItems[key]['link'] !== '' ? 
                                <a href={carouselItems[key]['link']} alt={carouselItems[key]['caption']} className="primary-link">
                                    {carouselItems[key]['caption']}
                                </a> :
                                carouselItems[key]['caption']
                            }
                        </h5>
                    </Carousel.Caption>
                    <div className="carousel-caption-spacer"></div>
                </Carousel.Item>
            );
        }
        return itemArray;
    };

    return (
        <Carousel
            className={classNames("custom-carousel", props.class)}
            controls={props.controls}
            fade={props.fade}
            indicators={props.indicators}
            interval={props.interval}
            keyboard={props.keyboard}
            slide={props.slide}
        >
            {carouselItemsHandler(props.items)}
        </Carousel>
    );
};

export default CustomCarousel;