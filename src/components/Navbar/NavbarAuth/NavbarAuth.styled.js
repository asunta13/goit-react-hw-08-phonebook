import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledLink = styled(NavLink)`
  padding-top: 8px;
  display: inline-block;
  margin: 0 5px;
  text-decoration: none;
  color: #000;

  &.active {
    font-weight: bold;
  }
`;
