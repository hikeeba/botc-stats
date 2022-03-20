import { Routes, Route } from 'react-router-dom';
import Box from '@mui/material/Box';

import SignIn from './SignIn';
import PlayerList from './PlayerList';

const MainContent = ({ sideMenuWidth }) => {
  return (
    <Box
      component='main'
      sx={{
        width: { sm: `calc(100% - ${sideMenuWidth}px)` },
        ml: { sm: `${sideMenuWidth}px` },
        p: 3,
      }}
    >
      <Routes>
        <Route path='/' element={<div>home</div>} />
        <Route path='players' element={<PlayerList/>} />
        <Route path='signin' element={<SignIn />} />
      </Routes>
    </Box>
  );
};

export default MainContent;