import { useDispatch } from 'react-redux';
import { TextField } from '../../shared/utils/TextField/TextField';
import { Button } from '../../shared/utils/Button/Button';
import { Form } from './LoginForm.styled';

import { useForm } from '../../shared/hooks/useForm';
import { login } from '../../redux/auth/authOperations';

import { fields } from './fields';
import { initialState } from './initialState';

export const LoginForm = () => {
  const dispatch = useDispatch();
  const onSubmit = data => {
    dispatch(login(data));
  };
  const { state, handleChange, handleSubmit } = useForm({
    initialState,
    onSubmit,
  });
  const { email, password } = state;

  return (
    <Form onSubmit={handleSubmit}>
      <TextField value={email} handleChange={handleChange} {...fields.email} />
      <TextField
        value={password}
        handleChange={handleChange}
        {...fields.password}
      />
      <Button>Login</Button>
    </Form>
  );
};
