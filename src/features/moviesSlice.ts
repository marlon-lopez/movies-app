import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  MoviesQueryResponse,
  Category,
  Movie,
  MoviesCategoryKey,
  GenreId,
} from '../utils/types/index';
import { fetchMoviesByCategory } from '../utils/API';

export interface MoviesSliceState {
  popular: Category<Movie>;
  upcoming: Category<Movie>;
  top_rated: Category<Movie>;
  now_playing: Category<Movie>;
  genres: GenreId[];
}

export const InitialCategoryState: Category<Movie> = {
  currentPage: 0,
  totalPages: 1,
  totalResults: 1,
  listByPage: {},
  loading: 'idle',
};

const initialState: MoviesSliceState = {
  popular: InitialCategoryState,
  upcoming: InitialCategoryState,
  top_rated: InitialCategoryState,
  now_playing: InitialCategoryState,
  genres: [
    { id: 123456, name: 'popular', category: true },
    { id: 2234536, name: 'upcoming', category: true },
    { id: 342456, name: 'top_rated', category: true },
    { id: 34243456, name: 'now_playing', category: true },
  ],
};

type payload = {
  category: MoviesCategoryKey;
} & MoviesQueryResponse;

export const fetchMovies = createAsyncThunk(
  `movies/fetchMovies`,
  async (
    { category, page }: { category: MoviesCategoryKey; page: number },
    thunkApi,
  ) => {
    if (page < 0) page = 1;
    try {
      const response = await fetchMoviesByCategory(category, page);
      if (response.total_results < 1) {
        return thunkApi.rejectWithValue('No results found');
      }
      return { category, page, ...response };
    } catch (error) {
      return thunkApi.rejectWithValue('Request has been rejected');
    }
  },
);

const moviesSlice = createSlice({
  name: 'movies',
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovies.pending, (state, action) => {
        state[action.meta.arg.category].loading = 'pending';
      })
      .addCase(
        fetchMovies.fulfilled,
        (state, action: PayloadAction<payload>) => {
          const { category, ...data } = action.payload;
          state[category].listByPage[data.page] = data.results;
          state[category].loading = 'succeeded';
          state[category].currentPage = data.page;
          state[category].totalPages = data.total_pages;
          state[category].totalResults = data.total_results;
        },
      )
      .addCase(fetchMovies.rejected, (state, action) => {
        state[action.meta.arg.category].loading = 'failed';
      });
  },
});

export default moviesSlice.reducer;
