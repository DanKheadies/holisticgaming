import React, { useState } from 'react';
// import ReactGA from 'react-ga';

import './Layout.scss';
// import * as env from '../../env';
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

    // useEffect(() => {
    //     // ReactGA.initialize(env.GOOG_ANA);
    //     ReactGA.initialize('UA-104097928-1');
    //     ReactGA.pageview(window.location.pathname);
    //     console.log(ReactGA.initialize('UA-104097928-1'));
    //     console.log(ReactGA.pageview(window.location.pathname));
    // }, []);

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