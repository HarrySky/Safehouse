import CssBaseline from '@material-ui/core/CssBaseline';
import React, { CSSProperties } from 'react';
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

import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import ChromeReaderModeIcon from '@material-ui/icons/ChromeReaderMode';
import HomeIcon from '@material-ui/icons/Home';
import HistoryIcon from '@material-ui/icons/History';

const styles = {
  tabs: {
    width: "100%",
    position: "fixed",
    bottom: "0px",
    left: "0px"
  } as CSSProperties
};

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
        <Paper square={true} style={styles.tabs}>
          <Tabs
            value={1}
            variant="fullWidth"
            indicatorColor="primary"
            textColor="primary"
            aria-label="icon tabs example"
          >
            <Tab label="News" icon={<ChromeReaderModeIcon />} aria-label="News" />
            <Tab label="Home" icon={<HomeIcon />} aria-label="Home" />
            <Tab label="Dashboard" icon={<HistoryIcon />} aria-label="Dashboard" />
          </Tabs>
        </Paper>
      </Router>
    );
  }
}
