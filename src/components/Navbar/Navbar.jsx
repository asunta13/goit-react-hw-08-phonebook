import { useSelector } from 'react-redux';

import { NavbarAuth } from './NavbarAuth/NavbarAuth';
import { UserMenu } from './UserMenu/UserMenu';

import { isUserLogin } from 'redux/auth/authSelectors';

export const Navbar = () => {
  const isLogin = useSelector(isUserLogin);

  return (
    <div>
      {!isLogin && <NavbarAuth />}
      {isLogin && <UserMenu />}
    </div>
  );
};
