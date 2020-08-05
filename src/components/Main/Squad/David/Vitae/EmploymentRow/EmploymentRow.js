import React from 'react';
import { Col, Row } from 'react-bootstrap';

import Aux from '../../../../../../hoc/Aux/Aux';

const EmploymentRow = props => {
    const roleHandler = (jobs) => {
        let jobsArray = [];
        for (const key in jobs) {
            jobsArray.push(
                <li>{jobs[key]}</li>
            )
        }
        return jobsArray;
    };
    
    return (
        <Aux>
            <Row>
                <Col xs={8}>
                    <h6>
                        {props.company}
                    </h6>
                </Col>
                <Col xs={4} className="right-side">
                    <h6>
                        {props.location}
                    </h6>
                </Col>
            </Row>
            <Row>
                <Col xs={7} className="role-column">
                    <h6>
                        {props.role}
                    </h6>
                </Col>
                <Col xs={5} className="right-side">
                    <h6>
                        {props.dates}
                    </h6>
                </Col>
            </Row>
            <Row>
                <ul>
                    {roleHandler(props.jobs)}
                </ul>
            </Row>
        </Aux>
    );
};

export default EmploymentRow;