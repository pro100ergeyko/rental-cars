import Lottie from 'lottie-react';
import CarsLoading from '../../img/animation/CarsLoading.json';
import { LoaderContainer } from './Loader.styled.jsx';

export const Loader = () => {
  return (
    <LoaderContainer>
      <Lottie animationData={CarsLoading} loop />
    </LoaderContainer>
  );
};
