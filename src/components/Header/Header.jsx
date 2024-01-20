import { Link } from 'react-router-dom';
import {
  HeaderContainer,
  Wraper,
  LogoContainer,
  LogoImg,
  NavContainer,
  StyledLink,
} from './Header.styled';

export const Header = () => {
  return (
    <HeaderContainer>
      <Wraper>
        <LogoContainer>
          <Link to="/">
            <LogoImg src="../../img/logo.png" alt="rental-cars" />
          </Link>
        </LogoContainer>
        <NavContainer>
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="catalog">Catalog</StyledLink>
          <StyledLink to="favorites">Favorites</StyledLink>
        </NavContainer>
      </Wraper>
    </HeaderContainer>
  );
};
