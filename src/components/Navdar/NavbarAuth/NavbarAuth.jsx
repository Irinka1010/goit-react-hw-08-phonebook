import { NavLink } from 'react-router-dom';
import css from 'components/Navdar/NavbarAuth/NavbarAuth.module.css';
export default function NavbarAuth() {
  return (
    <div>
      <NavLink className={css.StyledLink} to="/register">
        Register
      </NavLink>
      <NavLink className={css.StyledLink} to="/login">
        Log in
      </NavLink>
    </div>
  );
}
