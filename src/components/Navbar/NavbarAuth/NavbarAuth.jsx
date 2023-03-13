import { StyledLink } from './NavbarAuth.styled';

export const NavbarAuth = () => {
  return (
    <div>
      <StyledLink to="/register">Register</StyledLink> |
      <StyledLink to="/login">Login</StyledLink>
    </div>
  );
};
