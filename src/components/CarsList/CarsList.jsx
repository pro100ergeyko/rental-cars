import { useEffect, useState } from 'react';
import { baseFilter } from '../../helpers/baseFilter';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectCars, selectFavorites } from '../../redux/selectors';
import { getAllCars, getCars } from '../../redux/cars/carsOperations';
import { changeFilter } from '../../helpers/chengeFilter';
import { Filter } from '../Filter/Filter';
import { CarItem } from '../CarItem/CarItem';
import {
  ButtonContainer,
  ButtonLoadMore,
  CarList,
  CatalogContainer,
  DontFound,
  DontHave,
} from './CarsList.styled';

export const CarsList = () => {
  const [page, setPage] = useState(1);
  const [filter, setFilter] = useState(baseFilter);
  const location = useLocation();
  const favoritePage = location.pathname.includes('favorite');
  const cars = useSelector(favoritePage ? selectFavorites : selectCars);
  const dispatch = useDispatch();

  useEffect(() => {
    if (favoritePage) return;
    dispatch(getCars(page));
  }, [dispatch, page, favoritePage]);

  const handleSubmit = () => {
    dispatch(getAllCars());
  };

  const renderCar = changeFilter(cars, filter);

  const handleLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  return (
    <CatalogContainer>
      {favoritePage ? null : (
        <Filter onSubmit={handleSubmit} setFilter={setFilter} />
      )}
      {renderCar.length === 0 ? (
        favoritePage ? (
          <DontHave>You haven't any cars in your favorites list yet. </DontHave>
        ) : (
          <DontFound>
            Sorry, we did'nt found anything with this parameters
          </DontFound>
        )
      ) : null}
      <CarList>
        {renderCar?.map(car => (
          <CarItem key={car.id} carInfo={car} />
        ))}
      </CarList>
      {favoritePage ||
      renderCar.length === 0 ||
      renderCar.length % 12 !== 0 ? null : (
        <ButtonContainer>
          <ButtonLoadMore type="button" onClick={handleLoadMore}>
            Load More
          </ButtonLoadMore>
        </ButtonContainer>
      )}
    </CatalogContainer>
  );
};
