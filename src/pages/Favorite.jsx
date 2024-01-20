import { CarsList } from '../components/CarsList/CarsList';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { clearCarsStore } from '../redux/cars/carsOperations';

const Favorite = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(clearCarsStore());
  });

  return (
    <>
      <CarsList isFavorite={true} />
    </>
  );
};

export default Favorite;
