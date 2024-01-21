import {
  HeaderContainer,
  Wraper,
  MyLink,
  LogoContainer,
  NavContainer,
  StyledLink,
} from './Header.styled';

export const Header = () => {
  return (
    <HeaderContainer>
      <Wraper>
        <LogoContainer>
          <MyLink to="/">Rental-cars</MyLink>
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
