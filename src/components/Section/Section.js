import React from 'react';

import './Section.scss';
import Aux from '../../hoc/Aux/Aux';

const Section = props => {
    return (
        <Aux>
            <div className="section-header">
                {props.header}
            </div>
            <div className="section-content">
                {props.children}
            </div>
            {props.spacer && <div className="section-spacer"></div>}
        </Aux>
    );
};

export default Section;