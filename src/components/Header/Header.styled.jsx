import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const HeaderContainer = styled.div`
  position: static;
  width: 100%;
  background: rgba(39, 46, 57, 1);
  height: auto;
`;

export const Wraper = styled.div`
  margin: 0 auto;
  padding: 8px 20px 8px;
  width: 320px;
  display: flex;
  justify-content: space-between;

  @media (min-width: 768px) {
    width: 768px;
    padding: 16px 32px 16px;
  }

  @media (min-width: 1440px) {
    width: 1440px;
    padding: 12px 112px 12px;
  }
`;

export const LogoContainer = styled.div``;

export const LogoImg = styled.img``;

export const NavContainer = styled.div`
  display: flex;
  gap: 8px;

  @media (min-width: 768px) {
    gap: 10px;
  }

  @media (min-width: 1440px) {
    gap: 14px;
  }
`;

export const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: #ffffff;
  font-family: Manrope;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  transition: transform 250ms linear;

  &:hover {
    transform: scale(1.2);
  }

  &.active {
    font-weight: 700;
  }

  @media (min-width: 768px) {
    font-size: 18px;
  }

  @media (min-width: 1440px) {
    font-size: 22px;
  }
`;
