import axios from 'axios';

export const instance = axios.create({
  baseURL: 'https://65a6e04274cf4207b4f0fbbe.mockapi.io/adverts',
});

const LIMIT_PER_PAGE = 12;

export const fetchCars = async (page = 1) => {
  instance.defaults.params = {
    page,
    limit: LIMIT_PER_PAGE,
  };

  const { data } = await instance.get();
  instance.defaults.params = {};
  return data;
};

export const fetchAllCars = async () => {
  const { data } = await instance.get();
  return data;
};

export const fetchCarById = async id => {
  const { data } = await instance.get(`/${id}`);
  return data;
};
