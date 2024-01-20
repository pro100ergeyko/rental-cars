import { createSlice } from '@reduxjs/toolkit';
import {
  getCarInfo,
  addCarToFavorite,
  deleteCarFromFavorite,
} from './favoriteOperation';

const initialState = {
  carsList: [],
  loading: false,
};

export const favoriteSlice = createSlice({
  name: 'favorites',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(getCarInfo.pending, state => {
        state.loading = true;
      })
      .addCase(getCarInfo.fulfilled, state => {
        state.loading = false;
      })
      .addCase(getCarInfo.rejected, state => {
        state.loading = false;
      })
      .addCase(addCarToFavorite, (state, { payload }) => {
        state.carsList.push(payload);
      })
      .addCase(deleteCarFromFavorite, (state, { payload }) => {
        state.carsList = state.carsList.filter(car => car.id !== payload);
      });
  },
});

export const favoriteReduser = favoriteSlice.reducer;
