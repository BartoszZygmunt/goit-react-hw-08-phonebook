import { UserMenu } from 'components/UserMenu';
import { useSelector } from 'react-redux';
import { selectLoggedIn } from 'redux/selectors';
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import SettingsPhoneIcon from '@mui/icons-material/SettingsPhone';
import { Link as RouterLink } from 'react-router-dom';
import MenuItem from '@mui/material/MenuItem';

export const NavigationBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const handleOpenNavMenu = event => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const isLogged = useSelector(selectLoggedIn);
  const contactsButton = isLogged ? (
    <Button
      component={RouterLink}
      to="/contacts"
      onClick={handleCloseNavMenu}
      sx={{ my: 2, color: 'white', display: 'block' }}
    >
      CONTACTS
    </Button>
  ) : (
    ''
  );

  const userMenuSection = isLogged ? (
    <UserMenu />
  ) : (
    <Box sx={{ flexGrow: 0, display: 'flex' }}>
      <Button
        component={RouterLink}
        to="/login"
        onClick={handleCloseNavMenu}
        sx={{ my: 2, color: 'white', display: 'block' }}
      >
        LOG IN
      </Button>
      <Button
        component={RouterLink}
        to="/register"
        onClick={handleCloseNavMenu}
        sx={{ my: 2, color: 'white', display: 'block' }}
      >
        SIGN UP
      </Button>
    </Box>
  );

  return (
    <header>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <SettingsPhoneIcon
              sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }}
            />
            <Typography
              variant="h4"
              noWrap
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 800,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              Your Phonebook
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' },
                }}
              >
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography component={RouterLink} to="/" textAlign="center">
                    HOME
                  </Typography>
                </MenuItem>
                {isLogged ? (
                  <MenuItem onClick={handleCloseNavMenu}>
                    <Typography
                      component={RouterLink}
                      to="/contacts"
                      textAlign="center"
                    >
                      CONTACTS
                    </Typography>
                  </MenuItem>
                ) : (
                  ''
                )}
              </Menu>
            </Box>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              <Button
                component={RouterLink}
                to="/"
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                HOME
              </Button>
              {contactsButton}
            </Box>

            {userMenuSection}
          </Toolbar>
        </Container>
      </AppBar>
    </header>
  );
};
