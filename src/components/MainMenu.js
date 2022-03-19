import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography';

import CustomLink from './CustomLink';
import UserMenu from './UserMenu';
import EnvironmentBanner from './EnvironmentBanner';

const MainMenu = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <CustomLink to="/">
            Blood on the Clocktower Stats
          </CustomLink>
        </Typography>
        <EnvironmentBanner />
        <UserMenu />
      </Toolbar>
    </AppBar>
  );
};

export default MainMenu;
