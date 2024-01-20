import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { carsReducer } from './cars/carsSlice';
import { favoriteReduser } from './favorite/favoriteSlice';

const persistConfig = {
  key: 'favorite',
  storage,
  whitelist: ['carsList'],
};

export const store = configureStore({
  reducer: {
    cars: carsReducer,
    favorites: persistReducer(persistConfig, favoriteReduser),
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
