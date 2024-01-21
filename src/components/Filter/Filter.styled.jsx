import styled from 'styled-components';

export const FilterContainer = styled.div`
  margin-top: 30px;
  margin-bottom: 50px;
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
  font-weight: 500;
  line-height: 18px;
`;

export const InputLabel = styled.div`
  color: #8a8a89;
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
`;

export const CustomSelectBrand = {
  control: (style, _) => ({
    ...style,
    width: '224px',
    border: 'none',
    marginTop: '8px',
    borderRadius: '14px',
    fontSize: '18px',
    fontFamily: 'Manrope',
    backgroundColor: '#F7F7FB',
  }),

  menu: style => ({
    ...style,
    width: '224px',
    backgroundColor: '#FFF',
    padding: '14px',
    borderRadius: '14px',
  }),

  option: (style, { isFocused }) => {
    return {
      ...style,
      color: isFocused ? '##3470ff' : 'rgba(18, 20, 23, 0.20)',
      fontFamily: 'Manrope',
      fontSize: '16px',
      boxShadow: '0px 4px 36px 0px rgba(0, 0, 0, 0.02)',
      backgroundColor: '#FFF',
    };
  },

  placeholder: style => ({
    ...style,
    color: '#121417',
    padding: '14px',
  }),
};

export const CustomSelectPrice = {
  control: (style, _) => ({
    ...style,
    width: '125px',
    border: 'none',
    marginTop: '8px',
    borderRadius: '14px',
    fontSize: '18px',
    fontFamily: 'Manrope',
    backgroundColor: '#F7F7FB',
  }),

  menu: style => ({
    ...style,
    width: '125px',
    backgroundColor: '#FFF',
    padding: '14px 8px 14px 18px',
    borderRadius: '14px',
  }),

  option: (style, { isFocused }) => {
    return {
      ...style,
      color: isFocused ? '##3470ff' : 'rgba(18, 20, 23, 0.20)',
      fontFamily: 'Manrope',
      fontSize: '16px',
      boxShadow: '0px 4px 36px 0px rgba(0, 0, 0, 0.02)',
      backgroundColor: '#FFF',
    };
  },

  placeholder: style => ({
    ...style,
    color: '#121417',
    padding: '14px',
  }),
};

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
