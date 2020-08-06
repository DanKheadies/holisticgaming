import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.scss';
import Contact from './components/Main/Contact/Contact';
import David from './components/Main/Squad/David/David';
import EdTech from './components/Main/Squad/David/EdTech/EdTech';
import Games from './components/Main/Games/Games';
import Home from './components/Main/Home/Home';
import Layout from './hoc/Layout/Layout';
import PixaTool from './components/Main/PixaTool/PixaTool';
import Readings from './components/Main/Squad/David/Readings/Readings';
import Research from './components/Main/Research/Research';
import Squad from './components/Main/Squad/Squad';
import TDSBF from './components/Main/Games/TDSBF/TDSBF';
import Thanks from './components/Main/Thanks/Thanks';
import ThanksKinda from './components/Main/Thanks/ThanksKinda';
import TSoDK from './components/Main/Games/TSoDK/TSoDK';
import Vitae from './components/Main/Squad/David/Vitae/Vitae';

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Switch>
            <Route path="/contact" component={Contact} />
            <Route path="/games/tdsbf" component={TDSBF} />
            <Route path="/games/tsodk" component={TSoDK} />
            <Route path="/games" component={Games} />
            <Route path="/pixatool" component={PixaTool} />
            <Route path="/research" component={Research} />
            <Route path="/squad/david/edtech" component={EdTech} />
            <Route path="/squad/david/readings" component={Readings} />
            <Route path="/squad/david/vitae" component={Vitae} />
            <Route path="/squad/david" component={David} />
            <Route path="/squad" component={Squad} />
            <Route path="/thanks" component={Thanks} />
            <Route path="/thanks-kinda" component={ThanksKinda} />
            <Route path="/" exact component={Home} />
          </Switch>
        </Layout>
      </div>
    );
  };
}

export default App;