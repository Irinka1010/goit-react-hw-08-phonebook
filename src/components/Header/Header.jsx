import { Phone } from '@mui/icons-material';
import { AppBar, IconButton, Toolbar, Typography } from '@mui/material';
import NavbarMenu from 'components/Navdar/NavbarMenu/NavbarMenu';
import UserMenu from 'components/Navdar/UserMenu/UserMenu';
import useAuth from 'shared/hooks/useAuth';
import NavbarAuth from 'components/Navdar/NavbarAuth/NavbarAuth';

import { Link } from 'react-router-dom';

export default function Header() {
  const isLogin = useAuth();
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="samp" sx={{ flexGrow: 1 }}>
          <Link to="/">
            My Phones
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
