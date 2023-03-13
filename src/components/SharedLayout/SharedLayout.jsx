import { Outlet } from 'react-router-dom';
import { Container, Header, StyledLink } from './SharedLayout.styled';
import { Navbar } from 'components/Navbar/Navbar';

export const SharedLayout = () => {
  return (
    <Container>
      <Header>
        <StyledLink to="/" end>
          Home
        </StyledLink>
        <Navbar />
      </Header>
      <main>
        <Outlet />
      </main>
    </Container>
  );
};
