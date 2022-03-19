import { Routes, Route } from 'react-router-dom';
import Box from '@mui/material/Box';

import SignIn from './SignIn';

const MainContent = ({ sideMenuWidth }) => {
  return (
    <Box
      sx={{
        width: { sm: `calc(100% - ${sideMenuWidth}px)` },
        ml: { sm: `${sideMenuWidth}px` },
      }}
    >
      <Routes>
        <Route path="/" element={<div>home</div>} />
        <Route path="signin" element={<SignIn />} />
      </Routes>
    </Box>
  );
};

export default MainContent;