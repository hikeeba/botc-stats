import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography';

import CustomLink from './CustomLink';
import UserMenu from './UserMenu';
import EnvironmentBanner from './EnvironmentBanner';
import SideMenu from './SideMenu';

const MainMenu = ({ sideMenuWidth }) => {
  const [sideMenuOpen, setSideMenuOpen] = useState(false);

  const handleSideMenuToggle = () => {
    setSideMenuOpen(!sideMenuOpen);
  };

  return (
    <>
      <AppBar
        position="static"
        sx={{
          width: { sm: `calc(100% - ${sideMenuWidth}px)` },
          ml: { sm: `${sideMenuWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open side menu"
            onClick={handleSideMenuToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" noWrap sx={{ flexGrow: 1 }}>
            <CustomLink to="/">
              Blood on the Clocktower Stats
            </CustomLink>
          </Typography>
          <EnvironmentBanner />
          <UserMenu />
        </Toolbar>
      </AppBar>
      <SideMenu isOpen={sideMenuOpen} onClose={handleSideMenuToggle} width={sideMenuWidth} />
    </>
  );
};

export default MainMenu;
