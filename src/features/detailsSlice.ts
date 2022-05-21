import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getCredits, getDetails, getRecomendations } from '../utils/API';
import { MovieDetails, TvShowDetails } from '../utils/types';

interface detailsSliceState {
  selected: TvShowDetails | MovieDetails | {};
  loading: 'idle' | 'pending' | 'succeeded' | 'failed';
  error: string;
}

interface ErrorResponse {
  success: boolean;
  status_code: number;
  status_message: string;
}

export const fetchDetails = createAsyncThunk(
  'details/fetchDetails',
  async (
    {
      entry,
      id,
    }: {
      entry: string;
      id: number;
    },
    thunkApi,
  ) => {
    try {
      const response = await getDetails(entry, id);
      const credits = await getCredits(entry, id);

      const recomendations = await getRecomendations(entry, id);
      response.cast = credits.cast.slice(0, 20);
      response.videos.results = response.videos.results.slice(0, 2);
      response.recomendations = recomendations.results;
      return response;
    } catch (error: any) {
      return thunkApi.rejectWithValue('error.status_message');
    }
  },
);

const initialState: detailsSliceState = {
  selected: {},
  loading: 'idle',
  error: '',
};
const detailsSlice = createSlice({
  name: 'Details',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchDetails.pending, (state, action) => {
        state.selected = {};
        state.loading = 'pending';
      })
      .addCase(fetchDetails.fulfilled, (state, action) => {
        state.loading = 'succeeded';
        state.selected = action.payload;
      })
      .addCase(fetchDetails.rejected, (state, action) => {
        state.loading = 'failed';
        console.log(action);
        //state.error = action.payload;
      });
  },
});

export default detailsSlice.reducer;
