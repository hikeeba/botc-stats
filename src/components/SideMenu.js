import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';

import SideMenuDrawerItems from './SideMenuDrawerItems';

const SideMenu = ({isOpen, onClose, width}) => {
  const drawerItems = (<SideMenuDrawerItems />);

  return (
    <Box
      component="nav"
      sx={{ width: { sm: width }, flexShrink: { sm: 0 } }}
      aria-label="side menu"
    >
      <Drawer
        variant="temporary"
        open={isOpen}
        onClose={onClose}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: 'block', sm: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: width },
        }}
      >
        {drawerItems}
      </Drawer>
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: 'none', sm: 'block' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: width },
        }}
        open
      >
        {drawerItems}
      </Drawer>
    </Box>
  );
};

export default SideMenu;