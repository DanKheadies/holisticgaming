import React from 'react';

import './Research.scss';
import Aux from '../../../hoc/Aux/Aux';
import QuotesBar from '../../UI/QuotesBar/QuotesBar';
import ScrollArrow from '../../UI/ScrollArrow/ScrollArrow';

const Research = () => {
    return (
        <Aux>
            <QuotesBar />
            Research
            <ScrollArrow />
        </Aux>
    );
};

export default Research;