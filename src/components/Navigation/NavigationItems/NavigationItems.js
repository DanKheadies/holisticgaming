import React from 'react';

import './NavigationItems.scss';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = props => (
    <ul className="navigation-items">
        <NavigationItem exact link='/' active>
            Holistic Gaming
        </NavigationItem>
        <NavigationItem link='/games'>
            Games
        </NavigationItem>
        <NavigationItem link='/research'>
            Research
        </NavigationItem>
        <NavigationItem link='/squad'>
            Squad
        </NavigationItem>
    </ul>
);

export default navigationItems;