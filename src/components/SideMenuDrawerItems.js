import Divider from '@mui/material/Divider';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ExtensionIcon from '@mui/icons-material/Extension';
import PersonIcon from '@mui/icons-material/Person';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';

import Authenticated from './Authenticated';

const SideMenuDrawerItems = () => {
  return (
    <>
      <Toolbar />
      <Divider />
      <List>
        <ListItem disablePadding>
          <ListItemButton href="/">
            <ListItemIcon>
              <ExtensionIcon />
            </ListItemIcon>
            <ListItemText>Game Plays</ListItemText>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton href="/players">
            <ListItemIcon>
              <PersonIcon />
            </ListItemIcon>
            <ListItemText>Players</ListItemText>
          </ListItemButton>
        </ListItem>
      </List>
      <Authenticated>
        <Divider />
        <List>
          <ListItem disablePadding>
            <ListItemButton href="/admin/plays">
              <ListItemIcon>
                <ExtensionIcon />
              </ListItemIcon>
              <ListItemText>Edit Game Plays</ListItemText>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton href="/admin/players">
              <ListItemIcon>
                <AdminPanelSettingsIcon />
              </ListItemIcon>
              <ListItemText>Edit Players</ListItemText>
            </ListItemButton>
          </ListItem>
        </List>
      </Authenticated>
    </>
  );
};

export default SideMenuDrawerItems;