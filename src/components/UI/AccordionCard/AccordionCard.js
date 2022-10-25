import React, { useContext } from 'react';
import { Accordion, Card } from 'react-bootstrap';
import { useAccordionToggle } from 'react-bootstrap/AccordionToggle';
import AccordionContext from 'react-bootstrap/AccordionContext';
import { FaChevronDown } from 'react-icons/fa';
import classNames from 'classnames';

import './AccordionCard.scss';

const MyCustomToggle = ({children, eventKey, param}) => {
    const currentEventKey = useContext(AccordionContext);
    var toggleOnClick = useAccordionToggle(eventKey, () => {});
    var isCurrentEventKey = currentEventKey === eventKey;
    if (param) {
        var modParam = param.replace('?','');
        if (modParam === eventKey) {
            isCurrentEventKey = true;
        }
    }
  
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

const AccordionCard = props => {
    var paramVis = false;
    const currentEventKey = useContext(AccordionContext);
    if (props.param) {
        var modParam = props.param.replace('?','');
        if (modParam === props.eventKey &&
            (currentEventKey === null &&
             currentEventKey !== props.eventKey)) {
            paramVis = true;
        }
    }
    return (
        <Card className="accordion-card">
            <MyCustomToggle eventKey={props.eventKey} param={props.param}>
                {props.title}
            </MyCustomToggle>
            <Accordion.Collapse eventKey={props.eventKey} className={paramVis ? 'show' : ''}>
                <Card.Body className={props.centered ? 'center-content' : ''}>
                    {props.children}
                </Card.Body>
            </Accordion.Collapse>
        </Card>
    );
};

export default AccordionCard;