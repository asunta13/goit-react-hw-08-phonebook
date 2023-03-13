import { useDispatch } from 'react-redux';
import { login } from 'redux/auth/authOperations';

import { LoginForm } from '../../components/LoginForm/LoginForm';

const LoginPage = () => {
  const dispatch = useDispatch();
  const handleLogin = data => {
    dispatch(login(data));
  };

  return (
    <div>
      <LoginForm onSubmit={handleLogin} />
    </div>
  );
};

export default LoginPage;
