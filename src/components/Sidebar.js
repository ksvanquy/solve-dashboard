// src/components/Sidebar.js
import { Box, List, ListItem, ListItemText } from '@mui/material';
import Link from 'next/link';

const Sidebar = () => {
  return (
    <Box sx={{ width: 250, backgroundColor: '#f4f4f4' }}>
      <List>
        <ListItem>
          <Link href="/dashboard">Dashboard</Link>
        </ListItem>
        <ListItem>
          <Link href="/users">Users</Link>
        </ListItem>
        <ListItem>
          <Link href="/grades">Grades</Link>
        </ListItem>
        <ListItem>
          <Link href="/curriculum">Curriculum</Link>
        </ListItem>
        {/* Add other links here */}
      </List>
    </Box>
  );
};

export default Sidebar;
