import React from 'react';
import { Redirect, Switch } from 'react-router-dom';

import './Navigation.scss';
import Aux from '../../hoc/Aux/Aux';
import TrackedRoute from '../TrackedRoute/TrackedRoute';

import Contact from '../../components/Main/Contact/Contact';
import David from '../../components/Main/Squad/David/David';
import EdTech from '../../components/Main/Squad/David/EdTech/EdTech';
import Games from '../../components/Main/Games/Games';
import Home from '../../components/Main/Home/Home';
import PixaTool from '../../components/Main/PixaTool/PixaTool';
import Readings from '../../components/Main/Squad/David/Readings/Readings';
import Research from '../../components/Main/Research/Research';
import Squad from '../../components/Main/Squad/Squad';
import TDSBF from '../../components/Main/Games/TDSBF/TDSBF';
import Thanks from '../../components/Main/Thanks/Thanks';
import ThanksKinda from '../../components/Main/Thanks/ThanksKinda';
import TSoDK from '../../components/Main/Games/TSoDK/TSoDK';
import Vitae from '../../components/Main/Squad/David/Vitae/Vitae';

const Navigation = () => {
    return (
        <Aux>
            <Switch>
                <TrackedRoute path="/contact" component={Contact} />
                <TrackedRoute path="/games/tdsbf" component={TDSBF} />
                <TrackedRoute path="/games/tsodk" component={TSoDK} />
                <TrackedRoute path="/games" component={Games} />
                <TrackedRoute path="/pixatool" component={PixaTool} />
                <TrackedRoute path="/research" component={Research} />
                <TrackedRoute path="/squad/david/edtech" component={EdTech} />
                <TrackedRoute path="/squad/david/readings" component={Readings} />
                <TrackedRoute path="/squad/david/vitae" component={Vitae} />
                <TrackedRoute path="/squad/david" component={David} />
                <TrackedRoute path="/squad" component={Squad} />
                <TrackedRoute path="/thanks" component={Thanks} />
                <TrackedRoute path="/thanks-kinda" component={ThanksKinda} />
                <TrackedRoute path="/" exact component={Home} />
                <Redirect to="/" />
            </Switch>
        </Aux>
    );
};

export default Navigation;