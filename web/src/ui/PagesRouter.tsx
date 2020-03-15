import React from 'react'
import { connect } from "react-redux";

import {
  Router,
  Route,
  Switch
} from "react-router-dom";

import { Home } from 'pages/Home';
import { News } from 'pages/News';
import { Dashboard } from 'pages/Dashboard';
import { Task } from 'pages/Task';
import { Tips } from 'pages/Tips';
import { NotFound } from 'pages/NotFound';

import { mapStateToProps, Props } from 'store/ui/PagesRouter';

class PagesRouter extends React.PureComponent<Props> {
  render() {
    return (
      <Router history={this.props.history!}>
        <Switch>
          <Route exact={true} path="/" component={Home} />
          <Route exact={true} path="/news" component={News} />
          <Route exact={true} path="/dashboard" component={Dashboard} />
          <Route exact={true} path="/task/:taskId" component={Task} />
          <Route exact={true} path="/task/:taskId/tips" component={Tips} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    );
  }
}

// tslint:disable-next-line: no-default-export
export default connect(
  mapStateToProps,
  null
)(PagesRouter);
