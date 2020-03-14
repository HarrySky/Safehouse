import CssBaseline from '@material-ui/core/CssBaseline';
import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import { Home } from 'pages/Home';
import { News } from 'pages/News';
import { Dashboard } from 'pages/Dashboard';
import { Task } from 'pages/Task';
import { Tips } from 'pages/Tips';
import { NotFound } from 'pages/NotFound';

import { AppTabs } from 'ui/AppTabs';

export class App extends React.PureComponent {
  render() {
    return (
      <Router>
        <CssBaseline />
        <Switch>
          <Route exact={true} path="/" component={Home} />
          <Route exact={true} path="/news" component={News} />
          <Route exact={true} path="/dashboard" component={Dashboard} />
          <Route exact={true} path="/task/:taskId" component={Task} />
          <Route exact={true} path="/task/:taskId/tips" component={Tips} />
          <Route component={NotFound} />
        </Switch>
        <AppTabs />
      </Router>
    );
  }
}
