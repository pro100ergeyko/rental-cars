import Select from 'react-select';
import styled from 'styled-components';

export const FilterContainer = styled.div`
  margin-top: 20px;
`;

export const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 18px;
`;

export const SelectContainer = styled.div`
  display: flex;
  gap: 18px;
`;

export const Label = styled.label`
  color: #8a8a89;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 18px;
`;

export const InputLabel = styled.div`
  color: #8a8a89;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 18px;
`;

export const CustomSelectBrand = styled(Select)`
  margin-top: 8px;
`;

export const CustomSelectPrice = styled(Select)`
  margin-top: 8px;
`;

export const FromToContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 18px;
`;

export const InputContainer = styled.div`
  display: flex;
  margin-top: 8px;
`;

export const InputFrom = styled.input`
  display: flex;
  width: 160px;
  height: 48px;
  padding: 14px 24px;
  align-items: center;
  flex-shrink: 0;
  border-radius: 14px 0px 0px 14px;
  border: none;
  border-right: 1px solid rgba(138, 138, 137, 0.2);
  background: #f7f7fb;
  color: #121417;
  font-family: Manrope;
  font-size: 18px;
  font-weight: 500;
  line-height: 20px;

  &:hover,
  :focus,
  :active {
    border: 1px solid #3470ff;
  }
`;

export const InputTo = styled.input`
  display: flex;
  width: 160px;
  height: 48px;
  padding: 14px 24px;
  align-items: center;
  flex-shrink: 0;
  border-radius: 0px 14px 14px 0px;
  border: none;
  border-left: 1px solid rgba(18, 20, 23, 0.05);
  background: #f7f7fb;
  color: #121417;
  font-family: Manrope;
  font-size: 18px;
  font-weight: 500;
  line-height: 20px;

  &:hover,
  :focus,
  :active {
    border: 1px solid #3470ff;
  }
`;
export const Button = styled.button`
  margin-top: 25px;
  width: 136px;
  height: 48px;
  padding: 14px 44px;
  border-radius: 12px;
  background: #3470ff;
  color: #fff;
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  border: none;

  &:hover,
  :focus,
  :active {
    background: #0b44cd;
  }
`;
