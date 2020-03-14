import CssBaseline from '@material-ui/core/CssBaseline';
import React from 'react';

import AppTabs from 'ui/AppTabs';
import PagesRouter from 'ui/PagesRouter';
import { MuiThemeProvider, Theme, createMuiTheme } from '@material-ui/core/styles';
import { Palette, PaletteColorOptions } from '@material-ui/core/styles/createPalette';
import { Provider } from 'react-redux';
import { APP_STORE } from 'store';

const APP_THEME: Readonly<Theme> = createMuiTheme({
  palette: {
    primary: {
      main: "#262642"
    } as Readonly<PaletteColorOptions>,
    secondary: {
      main: "#CDC7D7",
    } as Readonly<PaletteColorOptions>,
    type: 'light',
  } as Readonly<Palette>,
});


import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import AnnouncementIcon from '@material-ui/icons/Announcement';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PersonPinIcon from '@material-ui/icons/PersonPin';

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
      <MuiThemeProvider theme={APP_THEME}>
        <CssBaseline />
        <Provider store={APP_STORE}>
          <PagesRouter />
          
          <AppTabs />
        </Provider>
      </MuiThemeProvider>
    );
  }
}
