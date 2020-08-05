import React, { useState } from 'react';

import './Layout.scss';
import Aux from '../Aux/Aux';
import Footer from '../../components/Footer/Footer';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

const Layout = props => {
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
            <main className="content">
                {props.children}
            </main>
            <Footer />
        </Aux>
    );
};

export default Layout;