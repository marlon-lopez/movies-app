import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { getDataByGenre, getGenres } from '../utils/API';
import { GenreId, Movie, TvShow } from '../utils/types';

interface GenresPayload {
  tv: GenreId[];
  movie: GenreId[];
}
interface InitialDiscoveryState {
  results: Record<string, (Movie | TvShow)[]>;
  loading: 'idle' | 'pending' | 'succeeded' | 'failed';
  page: number;
  totalPages: number;
  error: null | string;
  genreId: number;
  genres: GenresPayload;
}

const initialState: InitialDiscoveryState = {
  results: {},
  loading: 'idle',
  error: null,
  page: 0,
  totalPages: 0,
  genreId: 0,
  genres: { tv: [], movie: [] },
};

interface ParsedResponse {
  page: number;
  results: (Movie | TvShow)[];
  total_pages: number;
  total_results: number;
  genreId: number;
}

export const fetchGenres = createAsyncThunk(
  'discover/fetchGenres',
  async (_, thunkApi) => {
    try {
      const [movie, tv] = await Promise.all([
        getGenres('movie'),
        getGenres('tv'),
      ]);
      console.log('movies:', movie);
      console.log('tv:', tv);
      return { tv: tv.genres, movie: movie.genres };
    } catch (error) {
      return thunkApi.rejectWithValue('Request has been rejected');
    }
  },
);

export const fetchDataByGenre = createAsyncThunk(
  'discovery/fetchDataByGenre',
  async (
    { type, genreId, page }: { type: string; genreId: number; page: number },
    thunkApi,
  ) => {
    try {
      const response = await getDataByGenre(type, genreId, page);
      return { ...response, genreId, page };
    } catch (error) {
      return thunkApi.rejectWithValue('Request has been rejected');
    }
  },
);

const discoverySlice = createSlice({
  name: 'dicovery',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchGenres.pending, (state, action) => {
        state.loading = 'pending';
      })
      .addCase(
        fetchGenres.fulfilled,
        (state, action: PayloadAction<GenresPayload>) => {
          state.genres = action.payload;
          state.loading = 'succeeded';
        },
      )
      .addCase(fetchGenres.rejected, (state) => {
        state.error = 'error';
        state.loading = 'failed';
      })
      .addCase(fetchDataByGenre.pending, (state) => {
        state.loading = 'pending';
      })
      .addCase(
        fetchDataByGenre.fulfilled,
        (state, action: PayloadAction<ParsedResponse>) => {
          const { genreId, page, results, total_pages } = action.payload;
          state.results[page] = results;
          state.genreId = genreId;
          state.page = page;
          state.totalPages = total_pages;
          state.loading = 'succeeded';
        },
      )
      .addCase(fetchDataByGenre.rejected, (state) => {
        state.error = 'an error has occurred';
      });
  },
});

export default discoverySlice.reducer;
