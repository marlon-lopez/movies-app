import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { getQuery } from '../utils/API';
import { Movie, TvShow } from '../utils/types';

interface InitialSearchState {
  results: Record<string, (Movie | TvShow)[]>;
  loading: 'idle' | 'pending' | 'succeeded' | 'failed';
  page: number;
  totalPages: number;
  totalResults: number;
  error: null | string;
  query: string;
}
const initialState: InitialSearchState = {
  results: {},
  loading: 'idle',
  error: null,
  page: 0,
  totalPages: 0,
  totalResults: 0,
  query: '',
};

export const fetchQuery = createAsyncThunk(
  'search/fetchQuery',
  async (
    {
      query,
      page,
    }: {
      query: string;
      page: number;
    },
    thunkApi,
  ) => {
    try {
      const response = await getQuery(query, page);
      return { ...response, query };
    } catch (error) {}
  },
);
interface QueryResponse {
  page: number;
  results: (Movie | TvShow)[];
  total_pages: number;
  total_results: number;
  query: string;
}

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    resetState(state) {
      state.loading = 'idle';
      state.results = {};
      state.page = 0;
      state.totalPages = 0;
      state.query = '';
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchQuery.pending, (state) => {
        state.loading = 'pending';
      })
      .addCase(
        fetchQuery.fulfilled,
        (state, action: PayloadAction<QueryResponse>) => {
          state.query = action.payload.query;
          state.results[action.payload.page] = action.payload.results;
          state.page = action.payload.page;
          state.totalPages = action.payload.total_pages;
          state.totalResults = action.payload.total_results;
          state.loading = 'succeeded';
        },
      )
      .addCase(fetchQuery.rejected, (state, action) => {
        state.error = 'an error has occurred';
      });
  },
});

export const { resetState } = searchSlice.actions;
export default searchSlice.reducer;
