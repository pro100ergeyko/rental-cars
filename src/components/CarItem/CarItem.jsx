import { useDispatch, useSelector } from 'react-redux';
import { selectFavorites } from '../../redux/selectors';
import { useState } from 'react';
import {
  addCarToFavorite,
  deleteCarFromFavorite,
} from '../../redux/favorite/favoriteOperation';
import { Modal } from '../Modal/Modal';
import { Heart } from '../Icons/Heart';
import {
  ButtonLearnMore,
  CarsInfoContainer,
  CarsInfoTitle,
  CarsItem,
  CarsModel,
  CarsSpan,
  HeartButton,
  Img,
  SpanContainer,
} from './CarItem.styled';

export const CarItem = ({ carInfo }) => {
  const favotites = useSelector(selectFavorites);
  const [modal, setModal] = useState(null);
  const dispatch = useDispatch();

  const handleFavorites = id => {
    return favotites.map(el => el.id).includes(id);
  };

  const handleLearnMore = car => {
    setModal(car);
  };

  const handlAddToFavorites = car => {
    if (handleFavorites(car.id)) {
      return dispatch(deleteCarFromFavorite(car.id));
    }
    dispatch(addCarToFavorite(car));
  };

  return (
    <>
      {modal ? <Modal car={modal} closeModal={setModal} /> : null}
      <CarsItem>
        <Img src={carInfo.img} alt={`${carInfo.make} ${carInfo.model}`} />
        <HeartButton type="button" onClick={() => handlAddToFavorites(carInfo)}>
          <Heart />
        </HeartButton>

        <CarsInfoContainer>
          <CarsInfoTitle>
            {carInfo.make} <CarsModel>{carInfo.model}, </CarsModel>
            {carInfo.year}
          </CarsInfoTitle>
          <CarsInfoTitle>{carInfo.rentalPrice}</CarsInfoTitle>
        </CarsInfoContainer>

        <SpanContainer>
          <CarsSpan>{carInfo.address.split(',')[1]}</CarsSpan>
          <CarsSpan>{carInfo.address.split(',')[2]}</CarsSpan>
          <CarsSpan>{carInfo.rentalCompany}</CarsSpan>
          <CarsSpan>{carInfo.type}</CarsSpan>
          <CarsSpan>{carInfo.model}</CarsSpan>
          <CarsSpan>{carInfo.mileage}</CarsSpan>
          <CarsSpan>{carInfo.accessories[0]}</CarsSpan>
        </SpanContainer>

        <ButtonLearnMore onClick={() => handleLearnMore(carInfo)} type="button">
          Learn More
        </ButtonLearnMore>
      </CarsItem>
    </>
  );
};
