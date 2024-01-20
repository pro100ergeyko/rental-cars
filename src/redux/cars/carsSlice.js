import { createSlice } from '@reduxjs/toolkit';
import { getCars, getAllCars, clearCarsStore } from './carsOperations';

const initialState = {
  cars: [],
  loading: false,
};

export const carsSlice = createSlice({
  name: 'cars',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(getCars.pending, state => {
        state.loading = true;
      })
      .addCase(getCars.fulfilled, (state, { payload }) => {
        state.cars = [...state.cars, ...payload];
        state.loading = false;
      })
      .addCase(getCars.rejected, state => {
        state.loading = false;
      })
      .addCase(getAllCars.pending, state => {
        state.loading = true;
      })
      .addCase(getAllCars.fulfilled, (state, { payload }) => {
        state.cars = payload;
        state.loading = false;
      })
      .addCase(getAllCars.rejected, state => {
        state.loading = false;
      })
      .addCase(clearCarsStore, state => {
        state.cars = [];
      });
  },
});

export const carsReducer = carsSlice.reducer;
