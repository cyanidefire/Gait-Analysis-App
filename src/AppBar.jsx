import { useState } from 'react';
import {
  AppBar, Toolbar, IconButton, Typography,
  List, ListItem, ListItemButton, ListItemText,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import screenSize from './screenSize.jsx';

const COLLAPSED = 64;

const drawerItems = [
  { label: 'Dashboard', href: '#dashboard' },
  { label: 'About', href: '#about' },
  { label: 'Resources', href: '#resources' },
];

export default function MyAppBar() {
  const isMobile = screenSize();
  const [open, setOpen] = useState(false);

  return (
    <AppBar
  position="fixed"
  sx={{
    top: 0,
    left: 0,
    // desktop: left strip that widens. mobile: top bar that grows downward
    width: isMobile ? '100%' : open ? 300 : COLLAPSED,
    height: isMobile ? (open ? '100vh' : COLLAPSED) : '100vh',
    transition: 'width 0.25s ease, height 0.25s ease',
    overflow: 'hidden',
    flexDirection: 'column',
  }}
>
      <Toolbar
        disableGutters
        sx={{
            px: 1,
            gap: 1,
            alignItems: 'center',
            minHeight: COLLAPSED,   // 64, same as the collapsed bar size
        }}
    >   
        <IconButton
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? 'close menu' : 'open menu'}
          sx={{ color: '#033f63' }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h4"
                    noWrap
                    sx={{
                        fontFamily: 'Aclonica, sans-serif',
                        fontWeight: 400,
                    }}>Cadence</Typography>
      </Toolbar>

      {open && (
        <List component="nav">
          {drawerItems.map((item) => (
            <ListItem key={item.label} disablePadding>
              <ListItemButton
                component="a"
                href={item.href}
                onClick={() => setOpen(false)}
              >
                <ListItemText primary={item.label} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      )}
    </AppBar>
  );
}