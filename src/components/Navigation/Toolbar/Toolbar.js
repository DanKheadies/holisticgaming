import React from 'react';

import './Toolbar.scss';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';

const toolbar = props => (
    <header className="toolbar">
        <div className="logo-toolbar">
            <Logo />
        </div>
        <nav className="desktop-only">
            <NavigationItems />
        </nav>
        <DrawerToggle clicked={props.drawerToggleClicked} />
    </header>
);

export default toolbar;