import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Movie, TvShow } from '../utils/types';

type favoritesSliceState = (TvShow | Movie)[];

const initialState: favoritesSliceState = [];

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addToFavorites: (state, action: PayloadAction<TvShow | Movie>) => {
      if (!state.find((favorite) => favorite.id === action.payload.id)) {
        state.push(action.payload);
      }
    },
    removeFromFavorites: (state, action) => {
      const objToRemove = state.findIndex((obj) => obj.id == action.payload);
      state = state.splice(objToRemove, 1);
    },
  },
});

export const { addToFavorites, removeFromFavorites } = favoritesSlice.actions;
export default favoritesSlice.reducer;
