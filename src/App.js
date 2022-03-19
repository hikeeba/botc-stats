import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { BrowserRouter, Link as RouterLink } from 'react-router-dom';
import { Authenticator } from '@aws-amplify/ui-react';

import MainMenu from './components/MainMenu';
import MainContent from './components/MainContent';

const LinkBehavior = React.forwardRef((props, ref) => {
  const { href, ...other } = props;
  // Map href (MUI) -> to (react-router)
  return <RouterLink ref={ref} to={href} {...other} />;
});

const theme = createTheme({
  palette: {
    mode: 'dark',
  },
  components: {
    MuiLink: {
      defaultProps: {
        component: LinkBehavior,
      },
    },
    MuiListItemButton: {
      defaultProps: {
        component: LinkBehavior,
      },
    },
    MuiButtonBase: {
      defaultProps: {
        LinkComponent: LinkBehavior,
      },
    },
  },
});

const sideMenuWidth = 240;

const App = () => {
  return (
    <Authenticator.Provider>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <MainMenu sideMenuWidth={sideMenuWidth} />
          <MainContent sideMenuWidth={sideMenuWidth} />
        </ThemeProvider>
      </BrowserRouter>
    </Authenticator.Provider>
  );
};

export default App;
