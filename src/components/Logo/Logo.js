import React from 'react';
import { Link } from 'react-router-dom';

import './Logo.scss';
import hgLogo from '../../assets/images/hg-logo.png';

const logo = () => (
    <div className="logo">
        <Link to="/">
            <img src={hgLogo} alt="HolisticGaming" />
        </Link>
    </div>
);

export default logo;