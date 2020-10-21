import React, { useState } from 'react';

import './Layout.scss';
import Aux from '../Aux/Aux';
import Footer from '../../components/Footer/Footer';
import Navigation from '../../components/Navigation/Navigation';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import ScrollArrow from '../../components/UI/ScrollArrow/ScrollArrow';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

const Layout = () => {
    const [showSideDrawer, setShowSideDrawer] = useState(false);

    const sideDrawerClosedHandler = () => {
        setShowSideDrawer(false)
    };

    const sideDrawerToggleHandler = () => {
        setShowSideDrawer(!showSideDrawer);
    }

    return (
        <Aux>
            <Toolbar drawerToggleClicked={sideDrawerToggleHandler} />
            <SideDrawer 
                closed={sideDrawerClosedHandler}
                open={showSideDrawer}
            />
            <Navigation />
            <Footer />
            <ScrollArrow />
        </Aux>
    );
};

export default Layout;