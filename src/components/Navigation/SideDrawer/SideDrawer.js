import React from 'react';

import './SideDrawer.scss';
import Aux from '../../../hoc/Aux/Aux';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';

const sideDrawer = props => {
    let attachedClasses = ["side-drawer", "close"];

    if (props.open) {
        attachedClasses = ["side-drawer", "open"];
    }

    return (
        <Aux>
            <Backdrop
                clicked={props.closed}
                show={props.open}
            />
            <div 
                className={attachedClasses.join(' ')}
                onClick={props.closed}
            >
                <div className="logo-side-drawer">
                    <Logo />
                </div>
                <nav>
                    <NavigationItems />
                </nav>
            </div>
        </Aux>
    );
};

export default sideDrawer;