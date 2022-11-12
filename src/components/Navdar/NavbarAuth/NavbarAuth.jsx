import { StyledLink } from 'components/Navdar/NavbarAuth/NavbarAuth.styled.jsx';
export default function NavbarAuth() {
  return (
    <div>
      <StyledLink to="/register">Register</StyledLink>
      <StyledLink to="/login">Log in</StyledLink>
    </div>
  );
}
