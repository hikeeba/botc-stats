import { useState } from 'react';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useAuthenticator } from '@aws-amplify/ui-react';
import Logout from '@mui/icons-material/Logout';
import Login from '@mui/icons-material/Login';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import { useNavigate } from "react-router-dom";

import useIsAuthenticated from '../hooks/useIsAuthenticated';

const UserMenu = () => {
  const isAuthenticated = useIsAuthenticated();
  const { user, signOut } = useAuthenticator((context) => [context.user]);
  const [anchorEl, setAnchorEl] = useState(null);
  const navigate = useNavigate();

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSignIn = () => {
    setAnchorEl(null);
    navigate("/signin");
  };

  const handleSignOut = () => {
    setAnchorEl(null);
    signOut();
  };

  return (
    <>
      <IconButton
        size="large"
        aria-label="current user account"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleMenu}
        color="inherit"
      >
        <AccountCircle />
      </IconButton>
      <Menu
        id="menu-appbar"
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {!isAuthenticated && (
          <MenuItem onClick={handleSignIn}>
            <ListItemIcon>
              <Login fontSize="small" />
            </ListItemIcon>
            Sign In
          </MenuItem>
        )}
        {isAuthenticated && (
          [
            <ListItem onClick={handleClose} divider key='welcome'>
              <ListItemText>
                Welcome, {user && (user.attributes.email)} {!user && ('no user!')}
              </ListItemText>
            </ListItem>,
            <MenuItem onClick={handleSignOut} key='signout'>
              <ListItemIcon>
                <Logout fontSize="small" />
              </ListItemIcon>
              Sign Out
            </MenuItem>
          ]
        )}
      </Menu>
    </>
  );
};

export default UserMenu;
