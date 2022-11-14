// import { Box } from '@mui/system';
import BottomNavigation from '@mui/material/BottomNavigation';
import { StyledLink } from 'components/Navdar/NavbarAuth/NavbarAuth.styled.jsx';
export default function NavbarAuth() {
  return (
    <BottomNavigation sx={{ backgroundColor: 'inherit' }}>
      <StyledLink to="/register">Register</StyledLink>
      <StyledLink to="/login">Log in</StyledLink>
    </BottomNavigation>
  );
}
