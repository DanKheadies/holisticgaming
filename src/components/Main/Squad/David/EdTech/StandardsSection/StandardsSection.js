import React from 'react';
import { Image, Table } from 'react-bootstrap';

import './StandardsSection.scss';

const StandardsSection = props => {
    const performanceIndicatorsHandler = indicators => {
        let indicatorsArray = [];
        for (const key in indicators) {
            indicatorsArray.push(
                <tr key={key}>
                    <td>
                        <p className="header">
                            {key}
                        </p>
                    </td>
                    <td>
                        <p className="indicator-text">
                            {indicators[key]['indicator']}
                        </p>
                        <p className="italics">
                            {indicators[key]['specific']}
                        </p>
                    </td>
                </tr>
            );
        }
        return indicatorsArray;
    };

    return (
        <div className="standards-section">
            <div id={props.id} className="anchor"></div>
            <p className="title">{props.title}</p>
            <div className="center-content">
                {props.linkIsRetired ? 
                    <p>
                        <Image src={props.image} className="image" />
                    </p> :
                    <a className="image-link" href={props.imageLink} alt={props.linkText}>
                        <Image src={props.image} className="image" />
                    </a>
                }
            </div>
            <div>
                {props.linkIsRetired ? 
                    <p>
                        {props.linkText} ({props.imageLink}) [RETIRED]
                    </p> :
                    <p>
                        <a className="primary-link" href={props.imageLink} alt={props.linkText}>
                            {props.linkText} ({props.imageLink})
                        </a>
                    </p>
                }
            </div>
            <p className="header">
                Context
            </p>
            <p>
                {props.context}
            </p>
            <p className="header">
                Conditions
            </p>
            <p>
                {props.conditions}
            </p>
            <p className="header">
                Scope
            </p>
            <p>
                {props.scope}
            </p>
            <p className="header">
                Role
            </p>
            <p>
                {props.role}
            </p>
            <p className="header">
                Performance Indicator(s):
            </p>
            <Table responsive>
                <tbody>
                    {performanceIndicatorsHandler(props.perIndicators)}
                </tbody>
            </Table>
            <p className="header">
                ADDIE
            </p>
            <p>
                {props.addie}
            </p>
            <div className="scroll-link">
                <a className="primary-link" href={"#" + props.id} alt="Top of the Section">
                    Navigate to the top of this section, {props.title}
                </a>
            </div>
        </div>
    );
};

export default StandardsSection;