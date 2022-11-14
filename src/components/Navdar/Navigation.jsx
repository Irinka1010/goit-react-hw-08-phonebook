import { AppBar, Toolbar, Typography } from '@mui/material';

import UserMenu from './UserMenu/UserMenu';
import useAuth from 'shared/hooks/useAuth';
import NavbarAuth from './NavbarAuth/NavbarAuth';

import { Link } from 'react-router-dom';

export default function Navigation() {
  const isLogin = useAuth();
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography
          variant="h6"
          component="samp"
          mr={{ xs: '30px' }}
          sx={{ flexGrow: 1 }}
        >
          <Link to="/">Phonebook</Link>
        </Typography>

        {isLogin ? <UserMenu /> : <NavbarAuth />}
      </Toolbar>
    </AppBar>
  );
}
