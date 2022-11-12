import { useDispatch, useSelector } from 'react-redux';
import { logout } from 'redux/auth/authOperetion';
import { getUser } from 'redux/auth/authSelectors';

import { Button, Typography } from '@mui/material';
import Stack from '@mui/material/Stack';

export default function UserMenu() {
  const dispatch = useDispatch();
  const { email } = useSelector(getUser);

  const onLogout = () => {
    dispatch(logout());
  };
  return (
    <Stack spacing={2} direction="row">
      <Typography variant="h6" component="p">
        {`${email}`}
      </Typography>
      <Button variant="contained" color="info" type="button" onClick={onLogout}>
        Logout
      </Button>
    </Stack>
  );
}
