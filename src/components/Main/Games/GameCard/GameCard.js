import React from 'react';
import { Button, Card} from 'react-bootstrap';
import classNames from 'classnames';

import './GameCard.scss';

const GameCard = props => (
    <Card className="game-card">
        <Card.Img variant="top" src={props.image} />
        <Card.Body>
            <Card.Title className="center-content">
                {props.title}
                <p className="version">{props.version}</p>
            </Card.Title>
            <Card.Text>
                {props.children}
            </Card.Text>
            <div className="center-content">
                <Button 
                    className={classNames("game-button", props.styleType)}
                    onClick={props.clicked}
                    variant="outline-primary"
                >
                    {props.buttonTitle}
                </Button>
            </div>
        </Card.Body>
    </Card>
);

export default GameCard;