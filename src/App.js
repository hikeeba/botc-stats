import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { BrowserRouter } from 'react-router-dom';
import { Authenticator } from '@aws-amplify/ui-react';

import MainMenu from './components/MainMenu';
import MainContent from './components/MainContent';
import { theme, sideMenuWidth } from './theme';

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
