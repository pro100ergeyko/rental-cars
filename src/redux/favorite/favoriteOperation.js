import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchCarById } from '../../helpers/api';

export const getCarInfo = createAsyncThunk(
  'favorites/getCarById',
  async (carId, thunkAPI) => {
    try {
      const res = await Promise.all(carId.map(id => fetchCarById(id)));
      return res;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addCarToFavorite = createAction('favorites/addCar', car => ({
  payload: car,
}));

export const deleteCarFromFavorite = createAction(
  'favorites/deleteCar',
  id => ({
    payload: id,
  })
);
