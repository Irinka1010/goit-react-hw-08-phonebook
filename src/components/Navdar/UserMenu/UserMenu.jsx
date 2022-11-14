import { useDispatch, useSelector } from 'react-redux';
import { logout } from 'redux/auth/authOperetion';
import { getUser } from 'redux/auth/authSelectors';
import { StyledLink } from './UserMenu.styled';
import Stack from '@mui/material/Stack';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import { Button, Typography } from '@mui/material';

export default function UserMenu() {
  const dispatch = useDispatch();
  const { name } = useSelector(getUser);

  const onLogout = () => {
    dispatch(logout());
  };
  return (
    <Stack spacing={2} direction="row" sx={{ alignItems: 'center' }}>
      <StyledLink to={'/contacts'}>
        <AccountCircleIcon />
        <Typography variant="h6" component="p" sx={{ ml: '5px' }}>
          {`${name}`}
        </Typography>
      </StyledLink>

      <Button
        type="button"
        color="inherit"
        sx={{ ml: '5px' }}
        onClick={onLogout}
      >
        <LogoutIcon />
      </Button>
    </Stack>
  );
}
