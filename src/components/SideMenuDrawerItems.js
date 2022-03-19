import Divider from '@mui/material/Divider';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ExtensionIcon from '@mui/icons-material/Extension';
import PersonIcon from '@mui/icons-material/Person';

import Authenticated from './Authenticated';

const SideMenuDrawerItems = () => {
  return (
    <>
      <Toolbar />
      <Divider />
      <List>
        <ListItem disablePadding>
          <ListItemButton href="/sessions">
            <ListItemIcon>
              <ExtensionIcon />
            </ListItemIcon>
            <ListItemText>Game Sessions</ListItemText>
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
        </List>
      </Authenticated>
    </>
  );
};

export default SideMenuDrawerItems;