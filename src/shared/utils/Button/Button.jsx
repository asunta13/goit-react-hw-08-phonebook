import PropTypes from 'prop-types';

import { ButtonStyled } from './Button.styled';

export const Button = ({ onClick, children, type = 'submit' }) => {
  return (
    <ButtonStyled onClick={onClick} type={type}>
      {children}
    </ButtonStyled>
  );
};

Button.propTypes = {
  onClick: PropTypes.func,
  type: PropTypes.string,
  children: PropTypes.any,
};
