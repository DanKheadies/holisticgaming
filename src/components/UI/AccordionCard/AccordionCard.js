import React, { useContext } from 'react';
import { Accordion, Card } from 'react-bootstrap';
import { useAccordionToggle } from 'react-bootstrap/AccordionToggle';
import AccordionContext from 'react-bootstrap/AccordionContext';
import { FaChevronDown } from 'react-icons/fa';
import classNames from 'classnames';

import './AccordionCard.scss';

const MyCustomToggle = ({children, eventKey}) => {
    const currentEventKey = useContext(AccordionContext);
    const toggleOnClick = useAccordionToggle(eventKey, () => {});
    const isCurrentEventKey = currentEventKey === eventKey;
  
    return (
            <Accordion.Toggle 
                as={Card.Header}
                onClick={toggleOnClick}
            >
                <h5>{children}</h5>
                <div className="icon">
                    <FaChevronDown 
                        className={classNames('chevron', isCurrentEventKey ? 'open' : '')}
                        size={18} 
                    />
                </div>
            </Accordion.Toggle>
    );
}

const AccordionCard = props => (
    <Card className="accordion-card">
        <MyCustomToggle eventKey={props.eventKey}>
            {props.title}
        </MyCustomToggle>
        <Accordion.Collapse eventKey={props.eventKey}>
            <Card.Body className={props.centered ? 'center-content' : ''}>
                {props.children}
            </Card.Body>
        </Accordion.Collapse>
    </Card>
);

export default AccordionCard;