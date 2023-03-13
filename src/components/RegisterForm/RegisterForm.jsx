import PropTypes from 'prop-types';
import { TextField } from '../../shared/utils/TextField/TextField';
import { Button } from '../../shared/utils/Button/Button';
import { Form } from './RegisterForm.styled';

import { useForm } from '../../shared/hooks/useForm';

import { fields } from './fields';
import { initialState } from './initialState';

export const RegisterForm = ({ onSubmit }) => {
  const { state, handleChange, handleSubmit } = useForm({
    initialState,
    onSubmit,
  });
  const { name, email, password } = state;

  return (
    <Form onSubmit={handleSubmit}>
      <TextField value={name} handleChange={handleChange} {...fields.name} />
      <TextField value={email} handleChange={handleChange} {...fields.email} />
      <TextField
        value={password}
        handleChange={handleChange}
        {...fields.password}
      />
      <Button>Register</Button>
    </Form>
  );
};

RegisterForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
