import styled from 'styled-components';

export const CarsItem = styled.li`
  display: flex;
  flex-wrap: wrap;
  position: relative;
  width: 274px;
  height: 426px;
`;

export const Img = styled.img`
  height: 268px;
  display: inline-block;
  border-radius: 14px;
`;

export const HeartButton = styled.button`
  position: absolute;
  top: 16px;
  left: 243px;
  border: none;
  padding: 0;
  margin: 0;
  background: none;
`;

export const CarsInfoContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const CarsInfoTitle = styled.p`
  color: #121417;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
`;

export const CarsModel = styled.span`
  color: #3470ff;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
`;

export const SpanContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const CarsSpan = styled.p`
  color: rgba(18, 20, 23, 0.5);
  font-size: 12px;
  font-weight: 400;
  line-height: 1.5;
  margin: 0;
  white-space: nowrap;

  &::after {
    content: '';
    width: 0px;
    height: 16px;
    border-left: 1px solid rgba(18, 20, 23, 0.1);
    margin-left: 6px;
    margin-right: 6px;
  }

  &:last-child::after {
    content: none;
  }
`;

export const ButtonLearnMore = styled.button`
  display: flex;
  width: 274px;
  height: 44px;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  border: none;
  background: #3470ff;
  color: #fff;
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;

  &:hover,
  :focus,
  :active {
    background: #0b44cd;
  }
`;
