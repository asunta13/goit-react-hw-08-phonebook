import { useMemo } from 'react';
import { nanoid } from 'nanoid';

import { Field, Wrapper } from './TextField.styled';

export const TextField = ({ label, handleChange, ...props }) => {
  const id = useMemo(() => nanoid(), []);

  return (
    <Wrapper>
      <label htmlFor={id}>{label}</label>
      <Field id={id} onChange={handleChange} {...props} />
    </Wrapper>
  );
};
