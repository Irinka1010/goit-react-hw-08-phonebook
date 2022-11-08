import { Link } from 'react-router-dom';
import NavbarAuth from './NavbarAuth/NavbarAuth';
import NavbarMenu from './NavbarMenu/NavbarMenu';
import UserMenu from './UserMenu/UserMenu';
import useAuth from 'shared/hooks/useAuth';

export default function Navigation() {
  const isLogin = useAuth();
  return (
    <nav>
      <div>
        <div>
          <Link to="/">Logo</Link>
          {isLogin && <NavbarMenu />}
          {isLogin ? <UserMenu /> : <NavbarAuth />}
        </div>
      </div>
    </nav>
  );
}
