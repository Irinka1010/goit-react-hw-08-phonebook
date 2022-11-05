import { Link } from 'react-router-dom';
import NavbarAuth from './NavbarAuth/NavbarAuth';
import NavbarMenu from './NavbarMenu/NavbarMenu';

export default function Navbar() {
  return (
    <nav>
      <div>
        <div>
          <Link to="/">Logo</Link>
          <NavbarAuth />
          <NavbarMenu />
        </div>
      </div>
    </nav>
  );
}
