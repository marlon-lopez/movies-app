import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import movieSlice from './moviesSlice';
import tvShowsSlice from './tvShowsSlice';

const store = configureStore({
  reducer: {
    movies: movieSlice,
    tvShows: tvShowsSlice,
  },
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

type EntryKeys = keyof RootState[keyof RootState];

export type Category = RootState[keyof RootState][EntryKeys];

export type CategoryType =
  RootState[keyof RootState][keyof RootState[keyof RootState]];

type CategoryKeys = Category[keyof Category];

function getByCategory<K1 extends keyof RootState, K2 extends keyof Category>(
  entry: K1,
  category: string,
) {}

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
