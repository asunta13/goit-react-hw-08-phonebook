import { TextField } from '../../shared/utils/TextField/TextField';
import { Button } from '../../shared/utils/Button/Button';
import { Form } from './LoginForm.styled';

import { useForm } from '../../shared/hooks/useForm';

import { fields } from './fields';
import { initialState } from './initialState';

export const LoginForm = ({ onSubmit }) => {
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
