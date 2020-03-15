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
