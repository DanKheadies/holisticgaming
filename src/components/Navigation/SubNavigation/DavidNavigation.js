import React from 'react';
import { NavLink } from 'react-router-dom';

import './SubNavigation.scss';

const DavidNavigation = () => (
    <nav className="sub-navigation">
        <NavLink className="primary-link" activeClassName="active" to="/squad/david" exact >
            David
        </NavLink>
        <NavLink className="primary-link"activeClassName="active" to="/squad/david/edtech" >
            EdTech
        </NavLink>
        <NavLink className="primary-link" activeClassName="active" to="/squad/david/readings" >
            Readings
        </NavLink>
        <NavLink className="primary-link" activeClassName="active" to="/squad/david/vitae" >
            Vitae
        </NavLink>
    </nav>
);

export default DavidNavigation;