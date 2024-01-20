import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchCars, fetchAllCars } from '../../helpers/api';

export const getCars = createAsyncThunk(
  'cars/getCars',
  async (page = 1, thunkAPI) => {
    try {
      const res = await fetchCars(page);
      return res;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getAllCars = createAsyncThunk(
  'cars/getAllCars',
  async (_, thunkAPI) => {
    try {
      const res = await fetchAllCars();
      return res;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const clearCarsStore = createAction('cars/clearCarsStore');
