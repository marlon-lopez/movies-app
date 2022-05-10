import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { fetchTvShowsByCategory } from '../utils/API';
import {
  Category,
  TvShowsQueryResponse,
  TvShow,
  TvShowsCategoryKey,
} from '../utils/types';

export interface TvShowSliceState {
  popular: Category<TvShow>;
  top_rated: Category<TvShow>;
  latest: Category<TvShow>;
  on_the_air: Category<TvShow>;
}

export const InitialCategoryState: Category<TvShow> = {
  currentPage: 0,
  totalPages: 1,
  totalResults: 1,
  listByPage: {},
  loading: 'idle',
};

const initialState: TvShowSliceState = {
  popular: InitialCategoryState,
  top_rated: InitialCategoryState,
  latest: InitialCategoryState,
  on_the_air: InitialCategoryState,
};

export const fetchTvShows = createAsyncThunk(
  'tvShows/fetchTvShows',
  async (
    {
      category,
      page,
    }: {
      category: TvShowsCategoryKey;
      page: number;
    },
    thunkApi,
  ) => {
    if (page < 0) page = 1;
    try {
      const response = await fetchTvShowsByCategory(category, page);
      return { category, page, ...response };
    } catch (error) {
      return thunkApi.rejectWithValue('Request has been rejected');
    }
  },
);

type Payload = {
  category: TvShowsCategoryKey;
} & TvShowsQueryResponse;

const tvShowSlice = createSlice({
  name: 'tvShows',
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTvShows.pending, (state, action) => {
        state[action.meta.arg.category].loading = 'pending';
      })
      .addCase(
        fetchTvShows.fulfilled,
        (state, action: PayloadAction<Payload>) => {
          const { category, results, page, total_pages, total_results } =
            action.payload;
          state[category].listByPage[page] = results;
          state[category].loading = 'succeeded';
          state[category].currentPage = page;
          state[category].totalPages = total_pages;
          state[category].totalResults = total_results;
        },
      )
      .addCase(fetchTvShows.rejected, (state, action) => {
        state[action.meta.arg.category].loading = 'failed';
      });
  },
});

export const {} = tvShowSlice.actions;

export default tvShowSlice.reducer;
