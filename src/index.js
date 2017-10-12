import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Homepage from './components/Homepage.js';
import About from './components/About.js';
import HomeRepairServices from './components/HomeRepairServices.js'
import ComputerITServices from './components/ComputerITServices'
import RealtorServices from './components/RealtorServices'

ReactDOM.render(
  <BrowserRouter>
      <Switch>
        <Route path="/homerepairservices" component={HomeRepairServices} />
        <Route path="/computeritservices" component={ComputerITServices} />
        <Route path="/realtorservices" component={RealtorServices} />
        <Route path="/about" component={About} />
        <Route path="/" component={Homepage} />
      </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

registerServiceWorker();
