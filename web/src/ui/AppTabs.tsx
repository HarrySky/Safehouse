import React, { CSSProperties } from 'react';

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
    left: "0px",
    boxShadow: '0 -5px 5px -5px #CDC7D7',
  } as CSSProperties,
  menu: {
    fontFamily: 'Lato',
  } as CSSProperties,
};

export class AppTabs extends React.PureComponent {
  render() {
    return (
      <Paper square={true} style={styles.tabs}>
        <Tabs
          value={1}
          variant="fullWidth"
          indicatorColor="primary"
          textColor="primary"
          aria-label="icon tabs example"
        >
          <Tab label="News" icon={<ChromeReaderModeIcon />} aria-label="News" style={styles.menu}/>
          <Tab label="Home" icon={<HomeIcon />} aria-label="Home" style={styles.menu}/>
          <Tab label="Dashboard" icon={<HistoryIcon />} aria-label="Dashboard" style={styles.menu}/>
        </Tabs>
      </Paper>
    );
  }
}
