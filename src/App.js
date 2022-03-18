import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { BrowserRouter, Link as RouterLink, Routes, Route } from "react-router-dom";

import MainMenu from './components/MainMenu';
import SignIn from './components/SignIn';

const LinkBehavior = React.forwardRef((props, ref) => {
  const { href, ...other } = props;
  // Map href (MUI) -> to (react-router)
  return <RouterLink ref={ref} to={href} {...other} />;
});

const theme = createTheme({
  components: {
    MuiLink: {
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

const App = () => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <MainMenu />
        <Routes>
          <Route path="/" element={<div>home</div>} />
          <Route path="signin" element={<SignIn />} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
