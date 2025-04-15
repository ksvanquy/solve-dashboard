'use client';
import { AppBar, Toolbar, Typography, Drawer, List, ListItem, ListItemText, ListItemButton } from '@mui/material';
import { useState } from 'react';
import Link from 'next/link';

const drawerWidth = 240;

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    const [mobileOpen, setMobileOpen] = useState(false);

    return (
        <div style={{ display: 'flex' }}>
            <AppBar position="fixed" sx={{ zIndex: 1201 }}>
                <Toolbar>
                    <Typography variant="h6" noWrap>
                        Solve Dashboard
                    </Typography>
                </Toolbar>
            </AppBar>

            <Drawer
                variant="permanent"
                sx={{
                    width: drawerWidth,
                    [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
                }}
            >
                <Toolbar />
                <List>
                    <ListItem disablePadding>
                        <ListItemButton component={Link} href="/">
                            <ListItemText primary="Trang chủ" />
                        </ListItemButton>
                    </ListItem>

                    <ListItem disablePadding>
                        <ListItemButton component={Link} href="/stats">
                            <ListItemText primary="Thống kê" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton component={Link} href="/users">
                            <ListItemText primary="Users Managerment" />
                        </ListItemButton>
                    </ListItem>
                </List>
            </Drawer>

            <main style={{ flexGrow: 1, padding: '1rem', marginLeft: drawerWidth }}>
                <Toolbar />
                {children}
            </main>
        </div>
    );
}
