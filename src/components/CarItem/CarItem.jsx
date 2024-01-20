import { useDispatch, useSelector } from 'react-redux';
import { selectFavorites } from '../../redux/selectors';
import { useState } from 'react';
import {
  addCarToFavorite,
  deleteCarFromFavorite,
} from '../../redux/favorite/favoriteOperation';
import { Modal } from '../Modal/Modal';
import { Heart } from '../Icons/Heart';
import { address } from '../../helpers/address';

export const CarItem = ({ carInfo }) => {
  const favotites = useSelector(selectFavorites);
  const [modal, setModal] = useState(null);
  const dispatch = useDispatch();

  const handleFavorites = id => {
    return favotites.map(el => el.id).includes(id);
  };

  const handleLoadMore = car => {
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
      <li>
        <img src={carInfo.img} alt={`${carInfo.make} ${carInfo.model}`} />
        <button type="button" onClick={() => handlAddToFavorites(carInfo)}>
          <Heart />
        </button>
        <div>
          <p>
            {carInfo.make}&nbsp;
            <span>{carInfo.model}</span>,&nbsp;
            {carInfo.year}
          </p>
          <p>{carInfo.rentalPrice}</p>
        </div>
        <div>
          <span>{address(carInfo.address).join('')}</span>
          <span>{carInfo.rentalCompany}</span>
          {carInfo.accessories.map(el => (
            <span className="last:border-r-0" key={el}>
              {el}
            </span>
          ))}
        </div>
        <button onClick={() => handleLoadMore(carInfo)} type="button">
          Learn More
        </button>
      </li>
    </>
  );
};
