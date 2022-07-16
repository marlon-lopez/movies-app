import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import movieSlice from './moviesSlice';
import tvShowsSlice from './tvShowsSlice';
import detailsSlice from './detailsSlice';
import searchSlice from './searchSlice';
import discoverSlice from './discoverSlice';

const store = configureStore({
  reducer: {
    movies: movieSlice,
    tvShows: tvShowsSlice,
    discover: discoverSlice,
    details: detailsSlice,
    search: searchSlice,
  },
});
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
