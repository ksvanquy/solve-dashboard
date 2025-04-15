// src/components/DashboardLayout.js
import { Box } from '@mui/material';
import Sidebar from './Sidebar';
import Navbar from './Navbar';

const DashboardLayout = ({ children }) => {
  return (
    <Box sx={{ display: 'flex' }}>
      <Sidebar />
      <Box sx={{ flexGrow: 1 }}>
        <Navbar />
        <Box sx={{ padding: 2 }}>
          {children}
        </Box>
      </Box>
    </Box>
  );
};

export default DashboardLayout;
