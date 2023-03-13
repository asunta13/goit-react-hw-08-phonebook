import { useSelector, useDispatch } from 'react-redux';
import { Button } from '../../../shared/utils/Button/Button';
import { UserDiv } from './UserMenu.styled';

import { selectUser } from '../../../redux/auth/authSelectors';
import { logout } from '../../../redux/auth/authOperations';

export const UserMenu = () => {
  const { email } = useSelector(selectUser);
  const dispatch = useDispatch();

  const onLogout = () => {
    dispatch(logout());
  };

  return (
    <UserDiv>
      <span>{email}</span> <Button onClick={onLogout}>Logout</Button>
    </UserDiv>
  );
};
