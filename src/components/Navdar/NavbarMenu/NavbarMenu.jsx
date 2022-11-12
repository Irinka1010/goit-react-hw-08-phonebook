import { NavLink } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import items from './items';
export default function NavbarMenu() {
  const elements = items.map(({ id, to }) => (
    <Stack sx={{ mr: '1rem' }} key={id}>
      <NavLink to={to}>
        <AccountCircleIcon />
      </NavLink>
    </Stack>
  ));

  return <Stack>{elements}</Stack>;
}
