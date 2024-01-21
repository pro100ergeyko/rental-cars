import { baseFilter } from '../../helpers/baseFilter';
import Select from 'react-select';
import {
  FilterContainer,
  CustomSelectBrand,
  CustomSelectPrice,
  Form,
  SelectContainer,
  Label,
  FromToContainer,
  InputLabel,
  InputContainer,
  InputFrom,
  InputTo,
  Button,
} from './Filter.styled';
import { makes } from '../../helpers/data/makes.js';
import { dropDownPrice } from '../../helpers/dropDownPrice';

export const Filter = ({ onSubmit, setFilter }) => {
  const handleSubmit = e => {
    e.preventDefault();
    const { make, rentalPrice, from, to } = e.target.elements;
    const filter = {
      make: make.value || baseFilter.make,
      rentalPrice: +rentalPrice.value || baseFilter.rentalPrice,
      from: from.value || baseFilter.from,
      to: to.value || baseFilter.to,
    };
    setFilter(filter);
    onSubmit();
  };

  return (
    <FilterContainer>
      <Form onSubmit={handleSubmit}>
        <SelectContainer>
          <Label>
            {'Car brand '}
            <Select
              name="make"
              placeholder="Enter the text"
              options={makes}
              styles={CustomSelectBrand}
            />
          </Label>
          <Label>
            {'Price/ 1 hour'}
            <Select
              name="rentalPrice"
              placeholder="To $"
              styles={CustomSelectPrice}
              options={dropDownPrice().map(price => ({
                value: price,
                label: `$${price}`,
              }))}
            />
          </Label>
        </SelectContainer>
        <FromToContainer>
          <InputLabel>
            <p>Сar mileage / km</p>
            <InputContainer>
              <InputFrom type="number" name="from" placeholder="From" />
              <InputTo type="number" name="to" placeholder="To" />
            </InputContainer>
          </InputLabel>
        </FromToContainer>
        <Button type="subnit">Search</Button>
      </Form>
    </FilterContainer>
  );
};
