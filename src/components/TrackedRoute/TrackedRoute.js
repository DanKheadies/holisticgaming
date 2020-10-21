import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import ReactGA from 'react-ga';

const TrackedRoute = props => {
    const { location } = props;

    useEffect(() => {
        const page = location.pathname;
        ReactGA.set({ page });
        ReactGA.pageview(page);
    }, [location.pathname]);

    return <Route {...props} />;
};

export default TrackedRoute;