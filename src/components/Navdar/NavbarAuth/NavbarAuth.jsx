import { Box } from '@mui/system';
import { StyledLink } from 'components/Navdar/NavbarAuth/NavbarAuth.styled.jsx';
export default function NavbarAuth() {
  return (
    <Box>
      <StyledLink to="/register">Register</StyledLink>
      <StyledLink to="/login">Log in</StyledLink>
    </Box>
  );
}
