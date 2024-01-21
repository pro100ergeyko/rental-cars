import styled from 'styled-components';

export const CatalogContainer = styled.div`
  margin: 0 auto;
  width: 320px;

  @media (min-width: 768px) {
    width: 768px;
  }

  @media (min-width: 1440px) {
    width: 1440px;
  }
`;

export const DontHave = styled.p`
  padding-top: 30px;
  text-align: center;
  color: #121417;
  font-family: Manrope;
  font-size: 32px;
  font-weight: 500;
  line-height: 30px;
`;

export const DontFound = styled.p`
  padding-top: 30px;
  text-align: center;
  color: #121417;
  font-family: Manrope;
  font-size: 32px;
  font-weight: 500;
  line-height: 30px;
`;

export const CarList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 50px 29px;
  margin-top: 30px;
  margin-bottom: 100px;
`;
export const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const ButtonLoadMore = styled.button`
  display: flex;
  justify-content: center;
  border: none;
  background: transparent;
  color: #3470ff;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  text-decoration-line: underline;
  margin-bottom: 100px;

  &:hover,
  :focus,
  :active {
    color: #0b44cd;
  }
`;
