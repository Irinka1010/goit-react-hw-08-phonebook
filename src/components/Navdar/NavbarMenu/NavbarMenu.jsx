import { NavLink } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';

import items from './items';
export default function NavbarMenu() {
  const elements = items.map(({ id, to, text }) => (
    <Stack sx={{ ml: '5rem' }} key={id}>
      <NavLink to={to}>
        <Avatar src="/broken-image.jpg" />
      </NavLink>
    </Stack>
  ));

  return <Stack>{elements}</Stack>;
}
