import styled from 'styled-components';

export const ButtonStyled = styled.button`
  font-weight: 500;
  font-size: 18px;
  padding: 4px 8px;
  text-align: center;
  border-radius: 4px;
  background: turquoise;
  color: white;
  cursor: pointer;
  margin-left: 6px;
  border-style: none;
  &:hover,
  &:focus {
    color: turquoise;
    background: white;
    box-shadow: 0px 3px 1px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.08),
      0px 2px 2px rgba(0, 0, 0, 0.12);
  }
`;
