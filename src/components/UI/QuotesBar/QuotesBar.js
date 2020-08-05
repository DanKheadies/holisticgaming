import React from 'react';
import { } from 'react-bootstrap';

import './QuotesBar.scss';
import { QUOTES } from '../../../data/quotes';

const QuotesBar = () => {
    const quotePicker = () => {
        let quoteArray = QUOTES;
        const quote = quoteArray[Math.floor(Math.random() * quoteArray.length)];
        return quote;
    };

    return (
        <div className="quotes-bar">
            <p>
                {quotePicker()}
            </p>
        </div>
    );
};

export default QuotesBar;