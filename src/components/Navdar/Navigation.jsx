import { Phone } from '@mui/icons-material';
import { AppBar, IconButton, Toolbar, Typography } from '@mui/material';
import NavbarMenu from './NavbarMenu/NavbarMenu';
import UserMenu from './UserMenu/UserMenu';
import useAuth from 'shared/hooks/useAuth';
import NavbarAuth from './NavbarAuth/NavbarAuth';

import { Link } from 'react-router-dom';

export default function Navigation() {
  const isLogin = useAuth();
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="samp" sx={{ flexGrow: 1 }}>
          <Link to="/">
            Phonebook
            <IconButton color="inherit">
              <Phone />
            </IconButton>
          </Link>
        </Typography>
        {isLogin && <NavbarMenu />}
        {isLogin ? <UserMenu /> : <NavbarAuth />}
      </Toolbar>
    </AppBar>
  );
}
